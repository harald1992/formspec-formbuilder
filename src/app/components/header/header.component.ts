import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private translationService: TranslationService) {}

  switchToDutch() {
    this.translationService.switchToDutch();
  }

  switchToEnglish() {
    this.translationService.switchToEnglish();
  }
}
