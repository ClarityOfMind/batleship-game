import { Injectable } from '@angular/core';
import { ShipPlaceService } from '../ship-place-service/ship-place.service';
import { SwitchTurnService } from '../switch-trun-service/switch-turn.service';
import { ShotLogService } from '../shot-log-service/shot-log.service';
import Coordinate from '../../models/coordinate.model';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  public difficulty;

  constructor(
    private _shipPlacementService: ShipPlaceService,
    private _switchTurnService: SwitchTurnService,
    private _shotLogService: ShotLogService
  ) {
    this.difficulty = this.easy;
   }

  checktargetValidity (target): boolean {
    if (target.state) {
      console.log ('already fired');
      return false;
    }
    return true;
  }

  launchTorpedo (): Coordinate {
    return this.difficulty();
  }

  easy () {
    return  new Coordinate (this._shipPlacementService.getRandomInt(0, 9), this._shipPlacementService.getRandomInt(0, 9));
  }

  setDifficulty (difficulty): void {
    this.difficulty = difficulty;
  }


}