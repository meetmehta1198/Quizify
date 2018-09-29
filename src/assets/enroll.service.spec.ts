import { TestBed, inject } from '@angular/core/testing';

import { EnrollService } from './enroll.service';

describe('EnrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnrollService]
    });
  });

  it('should be created', inject([EnrollService], (service: EnrollService) => {
    expect(service).toBeTruthy();
  }));
});
