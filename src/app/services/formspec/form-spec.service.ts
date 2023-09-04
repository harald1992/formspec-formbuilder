import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, share, tap } from 'rxjs';
import { FormSpec, FormSpecData } from './form-spec.interface';
import { Translation } from './formspec-translation';

@Injectable({
  providedIn: 'root',
})
export class FormspecService {
  constructor(private http: HttpClient) {}

  getFormSpec(): Observable<FormSpecData> {
    // return this.http.get<FormSpec>('/assets/my-formspec.json');
    return this.http.get<FormSpecData>('/assets/formspec-kvk.json');
  }

  // too slow for normal browser, think that's why it doesn't work on big formspec, only on smaller json files
  translateFormSpec(formSpec: FormSpecData): FormSpecData {
    this.http
      .get<Translation>('/assets/dutch-kvk.json')
      .subscribe((data: Translation) => {
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
