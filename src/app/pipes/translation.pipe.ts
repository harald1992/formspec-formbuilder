import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation/translation.service';
import { Translation } from '../services/formspec/formspec-translation.interface';

@Pipe({
  name: 'translation',
  pure: false, // so the pipe will always refresh, also when the dutch or english buttons are pressed. Might be performance heavier though if there are a lot of fields using this.
})
export class TranslationPipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(value: string, ...args: unknown[]): string {
    let keyValueTranslation: { [key: string]: string } | undefined =
      this.translationService.translation;
    if (!keyValueTranslation) return '';

    for (let key in keyValueTranslation) {
      value = value.replace(key, keyValueTranslation[key]);
    }

    return value;
  }
}
