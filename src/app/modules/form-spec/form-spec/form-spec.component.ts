import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FormSpec,
  FormSpecData,
} from 'src/app/services/formspec/form-spec.interface';
import { FormspecService } from 'src/app/services/formspec/form-spec.service';

@Component({
  selector: 'app-form-spec',
  templateUrl: './form-spec.component.html',
  styleUrls: ['./form-spec.component.scss'],
})
export class FormSpecComponent {
  formSpec!: FormSpec;

  constructor(private formSpecService: FormspecService) {}

  ngOnInit() {
    this.formSpecService.getFormSpec().subscribe((data: FormSpecData) => {
      console.log(data);

      this.formSpec = data.formSpec;
    });
  }
}