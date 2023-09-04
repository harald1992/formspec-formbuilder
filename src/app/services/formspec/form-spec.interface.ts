export interface FormSpecData {
  formSpec: FormSpec;
}

export interface FormSpec {
  navigation: NavigationAbstract;
  formSections: FormSection[];
}

export interface FormSection {
  name: string;
  id: string;
  type: string;
  controls: Control[];
}

export interface Control {
  name: string;
  label: string;
  value: string;
  type: string;
  validators: Validators;
  options?: Options;
  radioButtons?: RadioButton[];
}

export interface Options {
  min?: string;
  max?: string;
  step?: string;
}

export interface RadioButton {
  value: string;
  label: string;
}

export interface Validators {
  required?: boolean;
  minLength?: number;
}

// export interface FormSpecNavigation {    // is same as navigation abstract
//   label: string;
//   type: 'NAVIGATION_ABSTRACT' | 'PAGE_ABSTRACT';
//   expanded: boolean;
//   children?: NavigationAbstract[] | PageAbstract[];
// }

/*  Uitklapbaar  */
export interface NavigationAbstract {
  label: string;
  expanded: boolean;
  children: (NavigationAbstract | PageAbstract)[];
  type: 'NAVIGATION_ABSTRACT' | 'PAGE_ABSTRACT';
}

/* Link */
export interface PageAbstract {
  label: string;
  type: 'NAVIGATION_ABSTRACT' | 'PAGE_ABSTRACT';
  pageId: string;
}

// export interface PurpleChild {
//   label: string;
//   type?: string;
//   pageId?: string;
//   expanded?: boolean;
//   children?: FluffyChild[];
// }

// export interface FluffyChild {
//   label: string;
//   type: string;
//   pageId: string;
// }
