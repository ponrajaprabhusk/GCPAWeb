import { TestBed } from '@angular/core/testing';

import { RawDataServiceService } from './raw-data-service.service';

describe('RawDataServiceService', () => {
  let service: RawDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
