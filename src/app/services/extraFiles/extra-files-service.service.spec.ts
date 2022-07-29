import { TestBed } from '@angular/core/testing';

import { ExtraFilesServiceService } from './extra-files-service.service';

describe('ExtraFilesServiceService', () => {
  let service: ExtraFilesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraFilesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
