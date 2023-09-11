import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslationPipe } from 'src/app/pipes/translation.pipe';
import { InputWrapperComponent } from 'src/app/components/input-wrapper/input-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericInputComponent } from 'src/app/components/generic-input/generic-input.component';

const components = [InputWrapperComponent];
const modules = [CommonModule, HttpClientModule, ReactiveFormsModule];
@NgModule({
  declarations: [TranslationPipe, components],
  imports: [modules],
  exports: [modules, TranslationPipe, components],
})
export class SharedModule {}
