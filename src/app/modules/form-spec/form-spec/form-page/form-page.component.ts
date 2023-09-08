import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JSONPath } from 'jsonpath-plus';
import { filter } from 'rxjs/operators';
import {
  FormSection,
  FormSpecData,
} from 'src/app/services/formspec/form-spec.interface';
import {
  FormCell,
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
  formSection!: FormSection;
  // inputFields: FormCell[] = [];
  formRows: FormRow[] = [];
  myForm: FormGroup = this.fb.group({});

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
        this.formSection = formSection as FormSection;

        const formRows = this.formSpecService.filterInputFields(formSection);
        this.setupForm(formRows);
        this.formRows = formRows;
      });
    });
  }

  setupForm(formRows: FormRow[]) {
    this.myForm = this.fb.group({});

    for (const formRow of formRows) {
      console.log(formRow);
      this.myForm.addControl(
        formRow.inputField.aspects.concept.localPart,
        new FormControl('', Validators.required)
      );

      // this.myForm.addControl(
      //   formRow.inputField.aspects.concept.localPart,
      //   new FormControl<string | null>('', {})
      //   // this.fb.control(control.value)
      // );
    }
  }

  onSubmit() {
    console.log('submit');
  }
}
