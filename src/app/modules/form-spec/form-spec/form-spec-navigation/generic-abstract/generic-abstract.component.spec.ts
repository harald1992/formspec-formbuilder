import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericAbstractComponent } from './generic-abstract.component';

describe('GenericAbstractComponent', () => {
  let component: GenericAbstractComponent;
  let fixture: ComponentFixture<GenericAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericAbstractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
