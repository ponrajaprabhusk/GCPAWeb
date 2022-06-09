import { TestBed } from '@angular/core/testing';

import { PartnerServiceService } from './partner-service.service';

describe('PartnerServiceService', () => {
  let service: PartnerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
