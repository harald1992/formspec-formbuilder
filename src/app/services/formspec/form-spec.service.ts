import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, share, tap } from 'rxjs';
import { FormSpec, FormSpecData } from './form-spec.interface';
import { Translation, TranslationData } from './formspec-translation.interface';
import { JSONPath } from 'jsonpath-plus';

export interface FormRow {
  label: FormLabel;
  inputField: FormCell;
}

export interface FormLabel {
  value: string;
}

export interface FormCell {
  cellType: 'INPUT';
  inputType:
    | 'TEXT'
    | 'DATE'
    | 'INTEGER'
    | 'FLOAT'
    | 'CHOICE'
    | 'TABLE'
    | 'PERCENTAGE'
    | 'GYEAR';
  aspects: Aspects;
  mandatory: boolean;
  factId: number;
}

interface Aspects {
  period?: any;
  concept: { localPart: string };
}

@Injectable({
  providedIn: 'root',
})
export class FormspecService {
  constructor(private http: HttpClient) {}

  getFormSpec(): Observable<FormSpecData> {
    // return this.http.get<FormSpec>('/assets/my-formspec.json');
    return this.http.get<FormSpecData>('/assets/formspec-kvk.json');
  }

  testFormSpecJSONPath() {
    this.getFormSpec().subscribe((data: FormSpecData) => {
      // let jsonpath = '$.formSpec.formSections..rows'; // filters
      let jsonpath = '$.formSpec.formSections..inputType';
      const result = JSONPath({ path: jsonpath, json: data });
      console.log(result);

      // const inputFields = JSONPath({
      //   path: '$..cols[?(@.inputType=="TEXT")]',
      //   json: result,
      // });
      // console.log(inputFields);

      // return inputFields;
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
  translateFormSpec(formSpec: FormSpecData): FormSpecData {
    this.http
      .get<TranslationData>('/assets/dutch-kvk.json')
      .subscribe((data: TranslationData) => {
        let keyValueTranslation = data.resources.translation.nl;
        let formSpecString = JSON.stringify(formSpec);

        for (let key in keyValueTranslation) {
          formSpecString = formSpecString.replaceAll(
            key,
            keyValueTranslation[key]
          );
        }
        formSpec = JSON.parse(formSpecString);
      });

    return formSpec;
  }
}
