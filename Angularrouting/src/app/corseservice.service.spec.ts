import { TestBed } from '@angular/core/testing';

import { CorseserviceService } from './corseservice.service';

describe('CorseserviceService', () => {
  let service: CorseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
