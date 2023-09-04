import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation/translation.service';

@Pipe({
  name: 'translation',
})
export class TranslationPipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(value: string, ...args: unknown[]): string {
    let keyValueTranslation =
      this.translationService.translationDutch?.resources.translation.nl;

    for (let key in keyValueTranslation) {
      value = value.replace(key, keyValueTranslation[key]);
    }

    return value;
  }
}
