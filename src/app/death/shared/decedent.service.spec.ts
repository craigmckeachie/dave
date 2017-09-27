import { TestBed, inject } from '@angular/core/testing';

import { DecedentService } from './decedent.service';

describe('DecedentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecedentService]
    });
  });

  it('should be created', inject([DecedentService], (service: DecedentService) => {
    expect(service).toBeTruthy();
  }));
});
