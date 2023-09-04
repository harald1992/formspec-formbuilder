import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAbstractComponent } from './navigation-abstract.component';

describe('NavigationAbstractComponent', () => {
  let component: NavigationAbstractComponent;
  let fixture: ComponentFixture<NavigationAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationAbstractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
