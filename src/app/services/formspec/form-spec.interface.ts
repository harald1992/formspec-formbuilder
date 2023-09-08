export interface FormSpecData {
  formSpec: FormSpec;
  draft: Draft;
}

export interface Draft {
  id: string;
  title: string;
  report: Report;
  entrypoint: string;
  currentStartDate: Date;
  currentEndDate: Date;
  previousStartDate: Date;
  previousEndDate: Date;
  expirationDate: Date;
  created: Date;
  updated: Date;
  duplicable: boolean;
}

export interface Report {
  items: any[];
}

// export interface FormSpec {
//   navigation: NavigationAbstract;
//   formSections: FormSection[];
// }

export interface FormSpec {
  // formSpecVersion: Version;
  // configuration: Configuration;
  // metadata: Metadata;
  // navigation: Navigation;  -> old, new is navigationAbstract
  navigation: NavigationAbstract; // new
  formSections: FormSection[];
  // namespaceUriPrefixMap: NamespaceURIPrefixMap[];
  // formulaContext: string;
}

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

export interface FormSection {
  name: string | null; // the header
  id: string; // links to the pageId from the Page_Abstract
  type: 'FORMSECTION';
  controls: (FormSection | FormInput)[]; // can have multiple levels
  sectionText?: string;
}

/* seems to only be FORMSECTION */
export enum FormSectionType {
  Formsection = 'FORMSECTION',
}

// export interface FormSectionControl {
//   name: null | string;
//   id: string;
//   type: FormSectionType;
//   controls: ControlControl[];
// }

export interface FormInput {
  type: CellTypeEnum;
  inputType: 'TABLE';
  table: Table;
}

// export enum ControlInputType {
//   Table = 'TABLE',
// }

export interface Table {
  id: string;
  // rows: TableRow[];
  // tableType?: TableType;
}

export enum CellTypeEnum {
  AspectInputHeader = 'ASPECT-INPUT-HEADER',
  FixedHeader = 'FIXED-HEADER',
  Input = 'INPUT',
  PaddingCell = 'PADDING-CELL',
  PaddingHeader = 'PADDING-HEADER',
  RepeatHeader = 'REPEAT-HEADER',
}

/* */
// export interface Control {
//   name: string;
//   label: string;
//   value: string;
//   type: string;
//   validators: Validators;
//   options?: Options;
//   radioButtons?: RadioButton[];
// }

// export interface Options {
//   min?: string;
//   max?: string;
//   step?: string;
// }

// export interface RadioButton {
//   value: string;
//   label: string;
// }

// export interface Validators {
//   required?: boolean;
//   minLength?: number;
// }

// // export interface FormSpecNavigation {    // is same as navigation abstract
// //   label: string;
// //   type: 'NAVIGATION_ABSTRACT' | 'PAGE_ABSTRACT';
// //   expanded: boolean;
// //   children?: NavigationAbstract[] | PageAbstract[];
// // }

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
