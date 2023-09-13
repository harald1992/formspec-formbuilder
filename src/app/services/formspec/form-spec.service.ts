import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FormCell,
  FormSpecData,
} from '../../../interfaces/form-spec.interface';
import { JSONPath } from 'jsonpath-plus';
import { FormRow, FormLabel } from 'src/interfaces/custom-interfaces.interface';

@Injectable({
  providedIn: 'root',
})
export class FormspecService {
  totalFormValues: any;
  constructor(private http: HttpClient) {}

  getFormSpec(): Observable<FormSpecData> {
    return this.http.get<FormSpecData>('/assets/formspec-kvk.json');
  }

  filterInputFields(data: any): FormRow[] {
    let jsonpath = '$..rows..cols'; // filters
    const result = JSONPath({ path: jsonpath, json: data });

    let formRows: FormRow[] = [];

    result?.forEach((item: any) => {
      let label: FormLabel = item.find(
        (item: any) => item.cellType === 'FIXED-HEADER' && item.value
      );

      let inputField: FormCell = item.find(
        (item: any) => item.cellType === 'INPUT'
      );

      if (label && inputField) {
        let formRow: FormRow = {
          label,
          inputField,
        };
        formRows.push(formRow);
      }
    });

    return formRows;
  }

  // todo: combine all form values in one big object to send to backend
  saveForm(formValues: any) {
    this.totalFormValues = formValues;
  }

  getFormValues() {
    console.log(this.totalFormValues);
  }

  /* test function to filter certain data from the formspec */
  testFormSpecJSONPath() {
    this.getFormSpec().subscribe((data: FormSpecData) => {
      // let jsonpath = '$.formSpec.formSections..rows'; // filters
      let jsonpath = '$.formSpec..inputType';
      const result = JSONPath({ path: jsonpath, json: data });
      // console.log(result);
      let allOptions: string[] = [];

      result.forEach((item: any) => {
        //stringarray
        if (!allOptions.includes(item)) {
          allOptions.push(item);
        }

        // parameter
        // for (const key in item) {
        //   if (!allOptions.includes(key)) {
        //     allOptions.push(key);
        //   }
        // }
      });

      console.log(allOptions);
    });
  }
}
