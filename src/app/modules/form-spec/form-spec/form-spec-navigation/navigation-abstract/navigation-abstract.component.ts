import { Component, Input } from '@angular/core';
import { NavigationAbstract } from 'src/app/services/formspec/form-spec.interface';

@Component({
  selector: 'app-navigation-abstract',
  templateUrl: './navigation-abstract.component.html',
  styleUrls: ['./navigation-abstract.component.scss'],
})
export class NavigationAbstractComponent {
  @Input() item!: NavigationAbstract;

  toggleExpanded() {
    // console.log(this.item.children);

    this.item.expanded = !this.item.expanded;
  }
}
