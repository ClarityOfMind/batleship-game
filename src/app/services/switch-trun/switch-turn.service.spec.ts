import { TestBed, inject } from '@angular/core/testing';

import { SwitchTurnService } from './switch-turn.service';

describe('SwitchTurnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwitchTurnService]
    });
  });

  it('should be created', inject([SwitchTurnService], (service: SwitchTurnService) => {
    expect(service).toBeTruthy();
  }));
});
