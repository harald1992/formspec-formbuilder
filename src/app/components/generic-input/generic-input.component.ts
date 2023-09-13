import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormCell } from 'src/interfaces/form-spec.interface';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
})
export class GenericInputComponent {
  @Input() form!: FormGroup;

  @Input() formCell!: FormCell;

  get id() {
    return this.formCell.aspects.concept.localPart;
  }
}
