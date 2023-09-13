import { FormCell } from './form-spec.interface';

export interface FormRow {
  label: FormLabel;
  inputField: FormCell;
}

export interface FormLabel {
  value: string;
}
