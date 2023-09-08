import { Injectable } from '@angular/core';
import {
  Translation,
  TranslationData,
} from '../formspec/formspec-translation.interface';
import { HttpClient } from '@angular/common/http';

enum LanguageName {
  DUTCH,
  ENGLISH,
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  #translationDutch: TranslationData | undefined = undefined;
  #translationEnglish: TranslationData | undefined = undefined;
  currentLanguage = LanguageName.DUTCH;

  constructor(private http: HttpClient) {}

  get translation(): { [key: string]: string } | undefined {
    switch (this.currentLanguage) {
      case LanguageName.DUTCH:
        return this.#translationDutch?.resources?.translation.nl || undefined;
        break;

      case LanguageName.ENGLISH:
        return this.#translationEnglish?.resources?.translation.en || undefined;
        break;

      default:
        return this.#translationDutch?.resources?.translation.nl || undefined;
        break;
    }
  }

  getTranslations() {
    this.http
      .get<TranslationData>('/assets/dutch-kvk.json')
      .subscribe((data: TranslationData) => (this.#translationDutch = data));

    this.http
      .get<TranslationData>('/assets/english-kvk.json')
      .subscribe((data: TranslationData) => (this.#translationEnglish = data));
  }

  switchToDutch() {
    this.currentLanguage = LanguageName.DUTCH;
  }

  switchToEnglish() {
    this.currentLanguage = LanguageName.ENGLISH;
  }
}
