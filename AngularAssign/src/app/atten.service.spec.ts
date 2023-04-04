import { TestBed } from '@angular/core/testing';

import { AttenService } from './atten.service';

describe('AttenService', () => {
  let service: AttenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
