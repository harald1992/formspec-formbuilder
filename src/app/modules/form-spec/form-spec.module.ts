import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericAbstractComponent } from './form-spec/form-spec-navigation/generic-abstract/generic-abstract.component';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';
import { FormPageComponent } from './form-spec/form-page/form-page.component';
import { NavigationAbstractComponent } from './form-spec/form-spec-navigation/navigation-abstract/navigation-abstract.component';
import { PageAbstractComponent } from './form-spec/form-spec-navigation/page-abstract/page-abstract.component';
import { FormSpecComponent } from './form-spec/form-spec.component';

const routes: Routes = [{ path: '**', component: FormSpecComponent }];

@NgModule({
  declarations: [
    FormSpecComponent,
    SidenavComponent,
    NavigationAbstractComponent,
    PageAbstractComponent,
    FormPageComponent,
    GenericAbstractComponent,
  ],
  imports: [SharedModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class FormSpecModule {}
