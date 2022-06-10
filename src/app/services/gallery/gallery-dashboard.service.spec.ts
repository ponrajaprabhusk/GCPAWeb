import { TestBed } from '@angular/core/testing';

import { GalleryDashboardService } from './gallery-dashboard.service';

describe('GalleryDashboardService', () => {
  let service: GalleryDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
