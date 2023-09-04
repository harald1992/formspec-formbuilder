import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  FormSection,
  FormSpecData,
} from 'src/app/services/formspec/form-spec.interface';
import { FormspecService } from 'src/app/services/formspec/form-spec.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent {
  pageId: string = '';
  formSection: FormSection | undefined;

  constructor(
    private route: ActivatedRoute,
    private formSpecService: FormspecService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      const pageId = decodeURIComponent(params.pageId);

      this.pageId = pageId;

      this.formSpecService.getFormSpec().subscribe((data: FormSpecData) => {
        const formSection = data.formSpec.formSections.find(
          (section: FormSection) => section.id === pageId
        );
        this.formSection = formSection;
      });
    });
  }
}
