import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CellTypeEnum,
  FormSectionControl,
} from 'src/interfaces/form-spec.interface';
import { FormspecService } from 'src/app/services/formspec/form-spec.service';
import { FormRow } from 'src/interfaces/custom-interfaces.interface';

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

  constructor(private elRef: ElementRef) {}

  // todo: do this on windowResize
  ngOnInit(): void {
    const amountOfColumns =
      this.formSectionControl.controls[0].table.rows[0]?.cols?.length || 0;
    this.cellWidth =
      this.elRef.nativeElement.offsetWidth / amountOfColumns + 'px';
  }
}
