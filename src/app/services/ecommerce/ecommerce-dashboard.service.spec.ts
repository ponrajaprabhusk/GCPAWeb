import { TestBed } from '@angular/core/testing';

import { EcommerceDashboardService } from './ecommerce-dashboard.service';

describe('EcommerceDashboardService', () => {
  let service: EcommerceDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
