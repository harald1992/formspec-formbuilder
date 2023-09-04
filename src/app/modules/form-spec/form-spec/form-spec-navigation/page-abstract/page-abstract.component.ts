import { Component, Input } from '@angular/core';
import { PageAbstract } from 'src/app/services/formspec/form-spec.interface';

@Component({
  selector: 'app-page-abstract',
  templateUrl: './page-abstract.component.html',
  styleUrls: ['./page-abstract.component.scss'],
})
export class PageAbstractComponent {
  @Input() item!: PageAbstract;
}
