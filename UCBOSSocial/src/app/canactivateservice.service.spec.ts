import { TestBed } from '@angular/core/testing';

import { CanactivateserviceService } from './canactivateservice.service';

describe('CanactivateserviceService', () => {
  let service: CanactivateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanactivateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
