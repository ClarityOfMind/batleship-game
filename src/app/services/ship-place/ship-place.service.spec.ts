import { TestBed, inject } from '@angular/core/testing';

import { ShipPlaceService } from './ship-place.service';

describe('ShipPlaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipPlaceService]
    });
  });

  it('should be created', inject([ShipPlaceService], (service: ShipPlaceService) => {
    expect(service).toBeTruthy();
  }));
});
