import { TestBed } from '@angular/core/testing';

import { UpdateRegistrationService } from './update-registration.service';

describe('UpdateRegistrationService', () => {
  let service: UpdateRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
