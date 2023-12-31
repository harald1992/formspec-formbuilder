import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SharedModule } from './modules/shared/shared.module';
import { TranslationPipe } from './pipes/translation.pipe';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
