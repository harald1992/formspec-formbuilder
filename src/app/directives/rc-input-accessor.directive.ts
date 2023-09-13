import {
  Directive,
  forwardRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// TODO: Implement once we use dynamic input components so angular can still track onTouched etc

@Directive({
  selector: '[appRcInputAccessor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RcInputAccessorDirective),
      multi: true,
    },
  ],
})
export class RcInputAccessorDirective implements ControlValueAccessor {
  @HostBinding('value') hostValue: any;

  lastValue: any;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(value: any) {
    this.hostValue = this.lastValue = value == null ? '' : value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  @HostListener('input', ['$event.target.value'])
  _handleInputEvent(value: any) {
    if (JSON.stringify(value) !== JSON.stringify(this.lastValue)) {
      this.lastValue = value;
      this.onChange(value);
      this.onTouched();
    }
  }
}
