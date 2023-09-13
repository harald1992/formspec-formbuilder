import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  NavigationAbstract,
  PageAbstract,
} from 'src/interfaces/form-spec.interface';

@Component({
  selector: 'app-generic-abstract',
  templateUrl: './generic-abstract.component.html',
  styleUrls: ['./generic-abstract.component.scss'],
})
export class GenericAbstractComponent implements OnChanges {
  @Input() item!: NavigationAbstract | PageAbstract;

  navigationAbstract!: NavigationAbstract;
  pageAbstract!: PageAbstract;

  ngOnChanges(changes: SimpleChanges): void {
    const value = changes['item'].currentValue;
    if (value.type === 'NAVIGATION_ABSTRACT') {
      this.navigationAbstract = value;
    } else {
      this.pageAbstract = value;
    }
  }
}
