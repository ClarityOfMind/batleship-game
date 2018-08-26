import { TestBed, inject } from '@angular/core/testing';

import { ShotLogService } from './shot-log.service';

describe('ShotLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShotLogService]
    });
  });

  it('should be created', inject([ShotLogService], (service: ShotLogService) => {
    expect(service).toBeTruthy();
  }));
});
