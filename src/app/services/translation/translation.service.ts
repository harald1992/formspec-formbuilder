import { Injectable } from '@angular/core';
import { Translation } from '../formspec/formspec-translation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  #translationDutch: Translation | undefined = undefined;

  constructor(private http: HttpClient) {}

  get translationDutch() {
    return this.#translationDutch;
  }

  getTranslations() {
    this.http
      .get<Translation>('/assets/dutch-kvk.json')
      .subscribe((data: Translation) => (this.#translationDutch = data));
  }
}
