export interface Translation {
  resources: Resources;
}

export interface Resources {
  translation: Translation;
}

export interface Translation {
  nl: { [key: string]: string };
}
