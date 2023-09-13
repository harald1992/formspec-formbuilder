// export interface Formspec {
//   formSpec: FormSpec;
//   draft: Draft;
// }

// export interface Draft {
//   id: string;
//   title: string;
//   report: Report;
//   entrypoint: string;
//   currentStartDate: Date;
//   currentEndDate: Date;
//   previousStartDate: Date;
//   previousEndDate: Date;
//   expirationDate: Date;
//   created: Date;
//   updated: Date;
//   duplicable: boolean;
// }

// export interface Report {
//   items: any[];
// }

// export interface FormSpec {
//   formSpecVersion: Version;
//   configuration: Configuration;
//   metadata: Metadata;
//   navigation: Navigation;
//   formSections: FormSection[];
//   namespaceUriPrefixMap: NamespaceURIPrefixMap[];
//   formulaContext: string;
// }

// export interface Configuration {
//   flattenedTables: boolean;
//   excludedFormulas: any[];
//   tableElrs: any[];
// }

// export interface FormSection {
//   name: string;
//   id: string;
//   type: FormSectionType;
//   controls: FormSectionControl[];
//   sectionText?: string;
// }

// export interface FormSectionControl {
//   name: null | string;
//   id: string;
//   type: FormSectionType;
//   controls: ControlControl[];
// }

// export interface ControlControl {
//   type: CellTypeEnum;
//   inputType: ControlInputType;
//   table: Table;
// }

// export enum ControlInputType {
//   Table = 'TABLE',
// }

// export interface Table {
//   id: string;
//   rows: TableRow[];
//   tableType?: TableType;
// }

// export interface TableRow {
//   id: string;
//   cols?: PurpleCol[];
//   typedDimension?: TypedDimension;
//   columnOffset?: number;
//   rows?: PurpleRow[];
// }

// export interface PurpleCol {
//   cellType: CellTypeEnum;
//   axis?: Axis;
//   isRollup?: boolean;
//   value?: null | string;
//   parentLevel?: number;
//   inputType?: ColInputType;
//   aspects?: PurpleAspects;
//   mandatory?: boolean;
//   factID?: number;
//   tableID?: string;
//   allDependentFacts?: number[];
//   facets?: Facets;
//   tags?: string[];
//   conceptLabel?: string;
//   choices?: Choice[];
//   isEntityIdentifier?: boolean;
//   formulas?: PurpleFormulas;
//   initialValue?: string;
//   fixed?: boolean;
//   formulaCalls?: FormulaCalls;
//   isMonetaryUnit?: boolean;
// }

// export interface PurpleAspects {
//   period: Period;
//   concept: TypedDimension;
//   entityIdentifier: EntityIdentifier;
//   dimensions: PurpleDimension[];
//   unit?: Unit;
// }

// export interface TypedDimension {
//   namespaceUri: string;
//   localPart: string;
// }

// export interface PurpleDimension {
//   dimension: TypedDimension;
//   member: PurpleMember;
// }

// export interface PurpleMember {
//   namespaceUri: string;
//   localPart: string;
//   type: MemberType;
// }

// export enum MemberType {
//   Explicit = 'explicit',
//   Typed = 'typed',
// }

// export interface EntityIdentifier {
//   scheme: string;
//   value: string;
// }

// export interface Period {
//   startDate?: Date;
//   endDate?: Date;
//   type: PeriodType;
//   instant?: Date;
// }

// export enum PeriodType {
//   Duration = 'duration',
//   Instant = 'instant',
// }

// export interface Unit {
//   namespaceUri: string;
//   localPart: LocalPartClass | LocalPartLocalPartEnum;
// }

// export interface LocalPartClass {
//   factRef: number;
// }

// export enum LocalPartLocalPartEnum {
//   Pure = 'pure',
//   Shares = 'shares',
// }

// export enum Axis {
//   X = 'x',
//   Y = 'y',
// }

// export enum CellTypeEnum {
//   AspectInputHeader = 'ASPECT-INPUT-HEADER',
//   FixedHeader = 'FIXED-HEADER',
//   Input = 'INPUT',
//   PaddingCell = 'PADDING-CELL',
//   PaddingHeader = 'PADDING-HEADER',
//   RepeatHeader = 'REPEAT-HEADER',
// }

// export interface Choice {
//   value: string;
//   label: string;
// }

// export interface Facets {
//   maxLength?: number;
//   minLength?: number;
//   enumeration?: string[];
//   length?: number;
//   pattern?: string[];
//   fractionDigits?: number;
//   totalDigits?: number;
//   minInclusive?: string;
// }

// export interface FormulaCalls {
//   assertions: FormulaCallsAssertion[];
// }

// export interface FormulaCallsAssertion {
//   participatingFactIds: number[];
//   call: Call;
//   severity: Severity;
//   message: string;
// }

// export interface Call {
//   id: string;
//   bindings: Binding[];
// }

// export interface Binding {
//   name: TypedDimension;
//   factID: number;
// }

// export enum Severity {
//   Error = 'error',
//   Warning = 'warning',
// }

// export interface PurpleFormulas {
//   assertions: PurpleAssertion[];
//   assignment?: PurpleAssignment;
// }

// export interface PurpleAssertion {
//   id: string;
//   participatingFactIds: number[];
//   jispExpr: PurpleJispExpr;
//   severity: Severity;
//   message: string;
// }

// export interface PurpleJispExpr {
//   op: Op;
//   sign?: Sign;
//   args?: PurpleArg[];
//   factIDs?: number[];
// }

// export interface PurpleArg {
//   op?: Sign;
//   factIDs?: number[];
//   value?: number[] | boolean;
//   sign?: Sign;
//   args?: FluffyArg[];
// }

// export interface FluffyArg {
//   factIDs?: number[];
//   sign?: Sign;
//   fallback?: FallbackElement;
//   op?: Sign;
//   args?: TentacledArg[];
//   value?: number[];
// }

// export interface TentacledArg {
//   factIDs?: number[];
//   sign?: Sign;
//   value?: PurpleValue[];
//   op?: Sign;
//   args?: StickyArg[];
//   fallback?: FallbackElement;
// }

// export interface StickyArg {
//   factIDs?: number[];
//   sign: Sign;
//   fallback?: FallbackElement;
//   op?: Sign;
//   args?: IndigoArg[];
// }

// export interface IndigoArg {
//   factIDs?: number[];
//   sign?: Sign;
//   fallback?: FallbackElement;
//   op?: Sign;
//   args?: IndecentArg[];
//   value?: PurpleValue[];
// }

// export interface IndecentArg {
//   factIDs: number[];
//   sign: Sign;
//   fallback: FallbackElement;
// }

// export enum FallbackElement {
//   Empty = '()',
// }

// export enum Sign {
//   AllEmpty = 'all-empty',
//   And = 'and',
//   Any = 'any',
//   Count = 'count',
//   Empty = '+',
//   Not = 'not',
//   Purple = '=',
//   Sign = '-',
//   Sum = 'sum',
// }

// export enum PurpleValue {
//   Categoriaal = 'Categoriaal',
//   Direct = 'Direct',
//   Enkelvoudig = 'Enkelvoudig',
//   Functioneel = 'Functioneel',
//   Geconsolideerd = 'Geconsolideerd',
//   GeconsolideerdEnEnkelvoudig = 'Geconsolideerd en enkelvoudig',
//   Indirect = 'Indirect',
//   Ja = 'Ja',
//   Na = 'Na',
//   Nee = 'Nee',
// }

// export enum Op {
//   AllEmpty = 'all-empty',
//   Any = 'any',
//   Empty = '=',
//   If = 'if',
//   Op = '<=',
//   Or = 'or',
// }

// export interface PurpleAssignment {
//   id: string;
//   jispExpr: FluffyJispExpr;
// }

// export interface FluffyJispExpr {
//   op: Op;
//   sign: Sign;
//   args: HilariousArg[];
// }

// export interface HilariousArg {
//   op?: Sign;
//   factIDs?: number[];
//   sign?: Sign;
//   args?: AmbitiousArg[];
//   value?: FallbackElement[];
// }

// export interface AmbitiousArg {
//   op?: Sign;
//   sign: Sign;
//   args?: CunningArg[];
//   factIDs?: number[];
// }

// export interface CunningArg {
//   factIDs?: number[];
//   sign: Sign;
//   fallback?: FallbackElement;
//   op?: Sign;
//   args?: MagentaArg[];
// }

// export interface MagentaArg {
//   op?: Sign;
//   sign: Sign;
//   args?: FriskyArg[];
//   factIDs?: number[];
//   fallback?: FallbackElement;
// }

// export interface FriskyArg {
//   op?: Sign;
//   sign: Sign;
//   args?: MischievousArg[];
//   factIDs?: number[];
//   fallback?: FallbackElement;
// }

// export interface MischievousArg {
//   op?: Sign;
//   sign: Sign;
//   args?: BraggadociousArg[];
//   factIDs?: number[];
//   fallback?: FallbackElement;
// }

// export interface BraggadociousArg {
//   op?: Sign;
//   sign: Sign;
//   args?: Arg1[];
//   factIDs?: number[];
//   fallback?: FallbackElement;
// }

// export interface Arg1 {
//   op?: Sign;
//   sign: Sign;
//   args?: TentacledArg[];
//   factIDs?: number[];
//   fallback?: FallbackElement;
// }

// export enum ColInputType {
//   Choice = 'CHOICE',
//   Date = 'DATE',
//   Float = 'FLOAT',
//   Gyear = 'GYEAR',
//   Integer = 'INTEGER',
//   Percentage = 'PERCENTAGE',
//   Text = 'TEXT',
// }

// export interface PurpleRow {
//   id: string;
//   cols?: FluffyCol[];
//   typedDimension?: TypedDimension;
//   columnOffset?: number;
//   rows?: FluffyRow[];
// }

// export interface FluffyCol {
//   cellType: CellTypeEnum;
//   axis?: Axis;
//   inputType?: ColInputType;
//   aspectType?: AspectType;
//   aspect?: Aspect;
//   label?: string;
//   facets?: Facets;
//   isRollup?: boolean;
//   value?: null | string;
//   parentLevel?: number;
//   aspects?: FluffyAspects;
//   mandatory?: boolean;
//   factID?: number;
//   tableID?: string;
//   allDependentFacts?: number[];
//   conceptLabel?: string;
//   formulas?: FluffyFormulas;
//   possiblyDuplicateReferencing?: boolean;
//   choices?: Choice[];
//   formulaCalls?: FormulaCalls;
// }

// export interface Aspect {
//   dimensions: AspectDimension[];
// }

// export interface AspectDimension {
//   dimension: TypedDimension;
//   member: FluffyMember;
// }

// export interface FluffyMember {
//   elementName: TypedDimension;
//   text: Text;
//   type: MemberType;
// }

// export enum Text {
//   DummyValue = '[dummy value]',
// }

// export enum AspectType {
//   TypedDimension = 'TYPED-DIMENSION',
// }

// export interface FluffyAspects {
//   period: Period;
//   concept: TypedDimension;
//   entityIdentifier: EntityIdentifier;
//   dimensions: FluffyDimension[];
//   unit?: Unit;
// }

// export interface FluffyDimension {
//   dimension: TypedDimension;
//   member: TentacledMember;
// }

// export interface TentacledMember {
//   namespaceUri?: string;
//   localPart?: MemberLocalPart;
//   type: MemberType;
//   elementName?: TypedDimension;
//   text?: Text;
// }

// export enum MemberLocalPart {
//   CommercialMember = 'CommercialMember',
//   ConsolidatedMember = 'ConsolidatedMember',
//   SeparateMember = 'SeparateMember',
// }

// export interface FluffyFormulas {
//   assertions: FluffyAssertion[];
//   assignment?: FluffyAssignment;
// }

// export interface FluffyAssertion {
//   id: string;
//   participatingFactIds: number[];
//   jispExpr: TentacledJispExpr;
//   severity: Severity;
//   message: string;
// }

// export interface TentacledJispExpr {
//   op: Op;
//   sign?: Sign;
//   args?: Arg2[];
//   factIDs?: number[];
// }

// export interface Arg2 {
//   op?: Sign;
//   factIDs?: number[];
//   value?: boolean;
//   sign?: Sign;
//   args?: Arg3[];
// }

// export interface Arg3 {
//   op?: Sign;
//   factIDs?: number[];
//   sign?: Sign;
//   args?: IndigoArg[];
// }

// export interface FluffyAssignment {
//   id: string;
//   jispExpr: StickyJispExpr;
// }

// export interface StickyJispExpr {
//   op: Op;
//   sign: Sign;
//   args: Arg4[];
// }

// export interface Arg4 {
//   op?: Sign;
//   factIDs?: number[];
//   sign?: Sign;
//   args?: Arg5[];
//   value?: FallbackElement[];
// }

// export interface Arg5 {
//   op: Sign;
//   sign: Sign;
//   args: BraggadociousArg[];
// }

// export interface FluffyRow {
//   id: string;
//   cols: TentacledCol[];
// }

// export interface TentacledCol {
//   cellType: CellTypeEnum;
//   axis?: Axis;
//   inputType: ColInputType;
//   aspectType?: AspectType;
//   aspect?: Aspect;
//   label?: string;
//   facets?: Facets;
//   aspects?: FluffyAspects;
//   mandatory?: boolean;
//   factID?: number;
//   tableID?: string;
//   allDependentFacts?: any[];
//   conceptLabel?: ConceptLabel;
// }

// export enum ConceptLabel {
//   A2Fe9798D84Ac0F081E2B1B52F4B020F = 'a2fe9798d84ac0f081e2b1b52f4b020f',
//   The15250Dca85075Bda421Ed181Cb269669 = '15250dca85075bda421ed181cb269669',
//   The61B72E1Ced24Ceae648590A9E607C596 = '61b72e1ced24ceae648590a9e607c596',
// }

// export enum TableType {
//   TypedDimensions = 'TYPED-DIMENSIONS',
// }

// export enum FormSectionType {
//   Formsection = 'FORMSECTION',
// }

// export interface Version {
//   major: number;
//   minor: number;
//   patch: number;
// }

// export interface Metadata {
//   schemaVersion: Version;
//   coreEntrypoint: string;
//   ontologyEntrypoint: string;
//   generator: string;
//   translations: Translations;
// }

// export interface Translations {
//   en: string;
//   nl: string;
// }

// export interface NamespaceURIPrefixMap {
//   namespaceUri: string;
//   prefix: string;
// }

// export interface Navigation {
//   label: string;
//   type: ChildType;
//   expanded: boolean;
//   children: NavigationChild[];
// }

// export interface NavigationChild {
//   label: string;
//   type: ChildType;
//   expanded?: boolean;
//   children?: PurpleChild[];
//   pageId?: string;
// }

// export interface PurpleChild {
//   label: string;
//   type: ChildType;
//   pageId?: string;
//   expanded?: boolean;
//   children?: FluffyChild[];
// }

// export interface FluffyChild {
//   label: string;
//   type: ChildType;
//   pageId?: string;
//   expanded?: boolean;
//   children?: TentacledChild[];
// }

// export interface TentacledChild {
//   label: string;
//   type: ChildType;
//   pageId?: string;
//   expanded?: boolean;
//   children?: StickyChild[];
// }

// export interface StickyChild {
//   label: string;
//   type: ChildType;
//   pageId?: string;
//   expanded?: boolean;
//   children?: IndigoChild[];
// }

// export interface IndigoChild {
//   label: string;
//   type: ChildType;
//   pageId: string;
// }

// export enum ChildType {
//   NavigationAbstract = 'NAVIGATION_ABSTRACT',
//   PageAbstract = 'PAGE_ABSTRACT',
// }
