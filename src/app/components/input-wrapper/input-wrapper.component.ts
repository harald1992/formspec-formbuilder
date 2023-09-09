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
    // let field = this.form.controls[this.id];
    // console.log(field);
  }
}
