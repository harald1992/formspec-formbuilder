import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PageAbstract } from 'src/interfaces/form-spec.interface';

@Component({
  selector: 'app-page-abstract',
  templateUrl: './page-abstract.component.html',
  styleUrls: ['./page-abstract.component.scss'],
})
export class PageAbstractComponent {
  @Input() item!: PageAbstract;

  constructor(private router: Router) {}

  get routerUrl() {
    return '/form-spec/' + encodeURIComponent(this.item.pageId);
  }

  navigateToForm() {
    const url = '/form-spec';
    // this.router.navigate([url], { pageId: this.item.pageId });
    // this.router.navigate(['/form-spec', , {encodeURIComponent(this.item.pageId)}]);

    this.router.navigate(['/form-spec'], {
      queryParams: { pageId: this.item.pageId },
    });
  }
}
