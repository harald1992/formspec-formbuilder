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
  controls: FormSectionControl[]; // can have multiple levels
  sectionText?: string;
}

export interface ControlControl {
  type: CellTypeEnum;
  inputType: 'TABLE';
  table: Table;
}

export interface Table {
  id: string;
  // rows: TableRow[];
  // tableType?: TableType;
}

export interface FormSectionControl {
  name: null | string;
  id: string;
  type: FormSectionType;
  controls: TableControl[];
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

export interface TableControl {
  type: CellTypeEnum;
  inputType: 'TABLE';
  table: Table;
}

// export enum ControlInputType {
//   Table = 'TABLE',
// }

export interface Table {
  id: string;
  rows: TableRow[];
  tableType?: TableType;
}

export enum TableType {
  TypedDimensions = 'TYPED-DIMENSIONS',
}

export interface TableRow {
  id: string;
  cols?: (PurpleCol | FormCell)[];
  // typedDimension?: TypedDimension;
  // columnOffset?: number;
  // rows?: PurpleRow [];
}

// export interface PurpleRow {
//   // cols: PurpleColumn[];
// }

/* this can be different cellTypes, so padding-header, fixed,header and repeat-header and INPUT.*/
export interface PurpleCol {
  cellType: CellTypeEnum;
  value?: string; // if fixed header
}

export enum ColInputType {
  CHOICE = 'CHOICE',
  DATE = 'DATE',
  FLOAT = 'FLOAT',
  GYEAR = 'GYEAR',
  INTEGER = 'INTEGER',
  PERCENTAGE = 'PERCENTAGE',
  TEXT = 'TEXT',
}

export enum CellTypeEnum {
  ASPECT_INPUT_HEADER = 'ASPECT-INPUT-HEADER',
  FIXED_HEADER = 'FIXED-HEADER',
  INPUT = 'INPUT',
  PADDING_CELL = 'PADDING-CELL',
  PADDING_HEADER = 'PADDING-HEADER',
  REPEAT_HEADER = 'REPEAT-HEADER',
}

export interface FormCell {
  cellType: 'INPUT';
  inputType:
    | 'TEXT'
    | 'DATE'
    | 'INTEGER'
    | 'FLOAT'
    | 'CHOICE' // ik denk dropdown button
    | 'TABLE' // deze uitwerken, inputvelden in de table mogen niet nog een keer laten zien worden
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
