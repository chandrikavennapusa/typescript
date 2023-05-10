import { TestBed } from '@angular/core/testing';

import { RegisterfieldsService } from './registerfields.service';

describe('RegisterfieldsService', () => {
  let service: RegisterfieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterfieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
