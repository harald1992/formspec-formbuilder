import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormSpecData } from './form-spec.interface';
import { TranslationData } from './formspec-translation.interface';
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
    | 'CHOICE' // ik denk dropdown button
    | 'TABLE'
    | 'PERCENTAGE'
    | 'GYEAR';
  aspects: Aspects;
  mandatory: boolean;
  facets?: {
    // de veldvalidaties
    maxLength?: number;
    minLength?: number;
    enumeration?: string[]; // bij choices dus dropdown buttons
    length?: number; // bijv 8 bij registratienummer KVK
    pattern?: string[]; // regex array, bijv [^@]+@[^@]+ of "[0-9]{1,5}"
    //   "pattern": ["([1-9][0-9]{7})|([0-9][1-9][0-9]{6})"]

    fractionDigits?: number; // bij float
    totalDigits?: number; // bij float
    minInclusive?: string; // met bijv 0,
  };
  choices?: { value: string; label: string }[]; // indien choice dus radio button

  dimensions: []; // geen idee wat dit is

  /* business rules: */
  factID: number; // voor andere alldependentFacts om hieraan te refereren denk ik
  allDependentFacts: number[]; // lijst met alle factID's die betrekking hebben hierop
  formulas?: any; // dit bepaalt validaties in betrekking met andere velden denk ik
}

interface Formula {
  assertions: [];
  assignment: unknown;
}

interface Aspects {
  period?: any;
  concept: { localPart: string };
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
      let jsonpath = '$.formSpec.formSections..facets';
      const result = JSONPath({ path: jsonpath, json: data });
      // console.log(result);
      let allOptions: string[] = [];

      result.forEach((item: any) => {
        for (const key in item) {
          if (!allOptions.includes(key)) {
            allOptions.push(key);
          }
        }
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
