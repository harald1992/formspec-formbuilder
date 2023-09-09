import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormRow } from 'src/app/services/formspec/form-spec.service';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss'],
})
export class InputWrapperComponent implements OnInit {
  @Input() form!: FormGroup;

  @Input() formRow!: FormRow;

  get id() {
    return this.formRow.inputField.aspects.concept.localPart;
  }

  ngOnInit(): void {
    let field = this.form.controls[this.id];
    console.log(field);
  }
  // get value() {
  //   {
  //     return this.form.controls[this.inputData.name].value;
  //   }
  // }

  // set value(value: any) {
  //   this.form.controls[this.inputData.name].setValue(value);
  // }

  onCheckboxChange(event: any) {
    console.log(event);

    // this.value = event.target?.checked;
  }

  // get checked() {
  //   // return this.form.controls[this.inputData.name].checked;
  // }

  // @Input() control: any;
}

// import { Component, HostListener, Input } from '@angular/core';
// import {
//   AbstractControl,
//   ControlValueAccessor,
//   FormControl,
//   FormGroup,
//   NG_VALUE_ACCESSOR,
// } from '@angular/forms';
// import { JsonFormControl } from 'src/app/services/dynamic-form.service';

// @Component({
//   selector: 'app-input-wrapper',
//   templateUrl: './input-wrapper.component.html',
//   styleUrls: ['./input-wrapper.component.scss'],
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       multi: true,
//       useExisting: InputWrapperComponent,
//     },
//   ],
// })
// export class InputWrapperComponent implements ControlValueAccessor {
//   @Input() form!: FormGroup;

//   @Input() inputData: JsonFormControl = {
//     name: '',
//     label: 'No label',
//     value: '',
//     type: 'text',
//     required: false,
//     validators: {},
//   };

//   @Input() control: any;
//   //  ((or type formcontrol?))

//   // ControlValueAccessor:
//   value: any;
//   onChange: OnChangeFn<any> = () => {};
//   onTouch: OnTouchFn = () => {};

//   disabled = false;

//   onChangeValue() {
//     this.onChange(this.value);
//   }

//   // ControlValueAccessor interface:
//   writeValue(obj: any): void {
//     if (obj === null) return;
//     this.inputData.value = obj;

//     // throw new Error('Method not implemented.');
//   }
//   registerOnChange(fn: OnChangeFn<any>): void {
//     this.onChange = fn;
//   }
//   registerOnTouched(fn: OnTouchFn): void {
//     this.onTouch = fn;
//   }

//   setDisabledState?(isDisabled: boolean): void {
//     this.disabled = isDisabled;
//   }

//   @HostListener('focusout')
//   onFocusOut() {
//     this.onTouch();
//   }
// }

// type OnChangeFn<T> = (value: T) => void;
// type OnTouchFn = () => void;
