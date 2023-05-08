import { TestBed } from '@angular/core/testing';

import { CanactivateservicesService } from './canactivateservices.service';

describe('CanactivateservicesService', () => {
  let service: CanactivateservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanactivateservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
