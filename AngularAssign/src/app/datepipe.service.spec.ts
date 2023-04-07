import { TestBed } from '@angular/core/testing';

import { DatepipeService } from './datepipe.service';

describe('DatepipeService', () => {
  let service: DatepipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatepipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
