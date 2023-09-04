export interface TranslationData {
  resources: Resources;
}

export interface Resources {
  translation: Translation;
}

export interface Translation {
  nl: { [key: string]: string };
  en: { [key: string]: string };
}
