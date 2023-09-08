import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWrapperComponent } from './input-wrapper.component';

describe('InputWrapperComponent', () => {
  let component: InputWrapperComponent;
  let fixture: ComponentFixture<InputWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputWrapperComponent]
    });
    fixture = TestBed.createComponent(InputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
