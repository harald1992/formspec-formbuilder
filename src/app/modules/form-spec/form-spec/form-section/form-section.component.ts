import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CellTypeEnum,
  FormSectionControl,
} from 'src/app/services/formspec/form-spec.interface';
import {
  FormRow,
  FormspecService,
} from 'src/app/services/formspec/form-spec.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss'],
})
export class FormSectionComponent implements OnInit {
  @Input() formSectionControl!: FormSectionControl;
  @Input() form!: FormGroup;
  cellWidth: string = '100px';

  CellTypeEnum: typeof CellTypeEnum = CellTypeEnum;

  constructor(
    private formSpecService: FormspecService,
    private elRef: ElementRef
  ) {}

  get formRows(): FormRow[] {
    const formRows = this.formSpecService.filterInputFields(
      this.formSectionControl
    );

    return formRows;
  }

  ngOnInit(): void {
    const amountOfColumns =
      this.formSectionControl.controls[0].table.rows[0]?.cols?.length || 0;
    this.cellWidth =
      this.elRef.nativeElement.offsetWidth / amountOfColumns + 'px';
  }
}
