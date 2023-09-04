import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslationPipe } from 'src/app/pipes/translation.pipe';

@NgModule({
  declarations: [TranslationPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule, HttpClientModule, TranslationPipe],
})
export class SharedModule {}
