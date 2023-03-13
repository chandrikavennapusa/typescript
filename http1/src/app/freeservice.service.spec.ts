import { TestBed } from '@angular/core/testing';

import { FreeserviceService } from './freeservice.service';

describe('FreeserviceService', () => {
  let service: FreeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
