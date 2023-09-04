import { Component, OnInit } from '@angular/core';
import { TranslationService } from './services/translation/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'formspec-formbuilder';
  constructor(private translationsService: TranslationService) {}

  ngOnInit(): void {
    this.translationsService.getTranslations();
  }
}
