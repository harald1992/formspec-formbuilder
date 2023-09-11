import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlOptions,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JSONPath } from 'jsonpath-plus';
import { filter } from 'rxjs/operators';
import {
  FormCell,
  FormSection,
  FormSpecData,
} from 'src/app/services/formspec/form-spec.interface';
import {
  FormRow,
  FormspecService,
} from 'src/app/services/formspec/form-spec.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent {
  pageId: string = '';
  mainFormSection: FormSection | undefined;
  myForm: FormGroup = this.fb.group({});

  formRows: FormRow[] = []; // old
  showInputFields = false;

  constructor(
    private route: ActivatedRoute,
    private formSpecService: FormspecService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getFormRowFromQueryParams();

    // this.myForm.valueChanges.subscribe((value: any) => console.log(value));
  }

  getFormRowFromQueryParams() {
    this.route.queryParams.subscribe((params: any) => {
      const pageId = decodeURIComponent(params.pageId);

      this.pageId = pageId;

      this.formSpecService.getFormSpec().subscribe((data: FormSpecData) => {
        const formSection = data.formSpec.formSections.find(
          (section: FormSection) => section.id === pageId
        );
        this.mainFormSection = formSection as FormSection;

        const formRows = this.formSpecService.filterInputFields(formSection);
        this.setupForm(formRows);
        this.formRows = formRows; // old
      });
    });
  }

  setupForm(formRows: FormRow[]) {
    this.myForm = this.fb.group({});

    for (const formRow of formRows) {
      this.myForm.addControl(
        formRow.inputField.aspects.concept.localPart,
        new FormControl('', this.getValidators(formRow.inputField))
      );

      // this.myForm.addControl(
      //   formRow.inputField.aspects.concept.localPart,
      //   new FormControl<string | null>('', {})
      //   // this.fb.control(control.value)
      // );
    }
  }

  getValidators(formField: FormCell): any {
    let validators: unknown[] = [];

    if (formField.mandatory) {
      validators.push(Validators.required);
    }

    if (formField.facets?.minLength) {
      validators.push(Validators.minLength(formField.facets?.minLength));
    }
    if (formField.facets?.maxLength) {
      validators.push(Validators.maxLength(formField.facets?.maxLength));
    }
    if (formField.facets?.length) {
      validators.push(Validators.minLength(formField.facets?.length));
      validators.push(Validators.maxLength(formField.facets?.length));
    }
    if (formField.facets?.pattern) {
      formField.facets?.pattern.forEach((regex: string) => {
        validators.push(Validators.pattern(regex));
      });
    }

    return validators;
  }

  onSubmit() {
    // console.log('submit');
    this.formSpecService.saveForm(this.myForm.value);
  }

  showAllInputFields() {
    this.showInputFields = !this.showInputFields;
  }
}
