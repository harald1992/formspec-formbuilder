import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpecComponent } from './form-spec.component';

describe('FormSpecComponent', () => {
  let component: FormSpecComponent;
  let fixture: ComponentFixture<FormSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
