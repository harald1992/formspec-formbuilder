import { TestBed } from '@angular/core/testing';
import { FormspecService } from './form-spec.service';

describe('FormspecService', () => {
  let service: FormspecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormspecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
