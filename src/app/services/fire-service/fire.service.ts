import { Injectable } from '@angular/core';
import { ShipPlaceService } from '../ship-place-service/ship-place.service';
import { SwitchTurnService } from '../switch-trun-service/switch-turn.service';
import { ShotLogService } from '../shot-log-service/shot-log.service';
import Coordinate from '../../models/coordinate.model';
import Tile from '../../models/tile.model';
import { Ship } from '../../models/ship.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  public difficulty;
  private torpedoTarget = new Subject<Coordinate>();
  public torpedoTarget$ = this.torpedoTarget.asObservable();


  constructor(
    private _shipPlacementService: ShipPlaceService,
    private _switchTurnService: SwitchTurnService,
    private _shotLogService: ShotLogService
  ) {
    this.setDifficulty(this.easy);
  }

  getFiredByPlayer (target: Coordinate) {
    const ships = this._shipPlacementService.getShips('AI');
    const board = this._shipPlacementService.getTiles('AI');

    const tileAttacked = board[target.x][target.y];
    tileAttacked.state = 1;

    if (tileAttacked.isShip) {
      const ship = this.findShip(tileAttacked, ships);
      this.hitShip(ship, ships);

      if (ships[ship.x][ship.y].health > 0) {
        console.log('Got him');
      } else {
        console.log('Fucking ship is dead');
      }

      if (this._switchTurnService.computerTurn) {
        this.launchTorpedo(this.difficulty());
      }
    } else {
      this._switchTurnService.switchTurn();
      if (this._switchTurnService.computerTurn) {
        this.launchTorpedo(this.difficulty());
      }
    }
  }

  getFiredByAI (target: Coordinate) {
    const ships = this._shipPlacementService.getShips('Human');
    const board = this._shipPlacementService.getTiles('Human');

    const tileAttacked = board[target.x][target.y];
    tileAttacked.state = 1;

    if (tileAttacked.isShip) {
      const ship = this.findShip(tileAttacked, ships);
      this.hitShip(ship, ships);

      if (ships[ship.x][ship.y].health > 0) {
        console.log('Got him');
      } else {
        console.log('Fucking ship is dead');
      }

      this.launchTorpedo(this.difficulty());
    } else {
      console.log('switch works');
      this._switchTurnService.switchTurn();
      console.log(this._switchTurnService.humanTurn);
      console.log(this._switchTurnService.computerTurn);
    }
  }

  findShip (target: Tile, ships: Ship[][]): Coordinate {
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].length; j++) {
        for (let n = 0; n < ships[i][j].deckCoordinates.length; n++) {
          if (target.position.x === ships[i][j].deckCoordinates[n].x && target.position.y === ships[i][j].deckCoordinates[n].y) {
            return new Coordinate(i, j);
          }
        }
      }
    }
  }

  hitShip (target: Coordinate, ships: Ship[][]) {
    ships[target.x][target.y].decreaseHealth();
  }

  launchTorpedo (difficulty: Coordinate) {
    this.torpedoTarget.next(difficulty);
  }

  easy () {
    return  new Coordinate (this._shipPlacementService.getRandomInt(0, 9), this._shipPlacementService.getRandomInt(0, 9));
  }

  setDifficulty (difficulty): void {
    this.difficulty = difficulty;
  }
}
