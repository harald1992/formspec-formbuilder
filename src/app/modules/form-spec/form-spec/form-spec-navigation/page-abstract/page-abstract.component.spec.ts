import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAbstractComponent } from './page-abstract.component';

describe('PageAbstractComponent', () => {
  let component: PageAbstractComponent;
  let fixture: ComponentFixture<PageAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAbstractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
