import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormCell, FormSpecData } from './form-spec.interface';
import { TranslationData } from './formspec-translation.interface';
import { JSONPath } from 'jsonpath-plus';

export interface FormRow {
  label: FormLabel;
  inputField: FormCell;
}

export interface FormLabel {
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class FormspecService {
  totalFormValues: any;
  constructor(private http: HttpClient) {}

  getFormSpec(): Observable<FormSpecData> {
    // return this.http.get<FormSpec>('/assets/my-formspec.json');
    return this.http.get<FormSpecData>('/assets/formspec-kvk.json');
  }

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

  // the english formspec has different lable id's than the dutch one, so whenever we want to change language, there is a new formspec that needs to be used in the application.

  // this translate function is too slow for normal browser, think that's why it doesn't work on big formspec, only on smaller json files
  // translateFormSpec(formSpec: FormSpecData): FormSpecData {
  //   this.http
  //     .get<TranslationData>('/assets/dutch-kvk.json')
  //     .subscribe((data: TranslationData) => {
  //       let keyValueTranslation = data.resources.translation.nl;
  //       let formSpecString = JSON.stringify(formSpec);

  //       for (let key in keyValueTranslation) {
  //         formSpecString = formSpecString.replaceAll(
  //           key,
  //           keyValueTranslation[key]
  //         );
  //       }
  //       formSpec = JSON.parse(formSpecString);
  //     });

  //   return formSpec;
  // }

  saveForm(formValues: any) {
    this.totalFormValues = formValues;
  }

  getFormValues() {
    console.log(this.totalFormValues);
  }
}
