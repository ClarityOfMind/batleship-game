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
  public computerFireSource = new Subject<Coordinate>();
  public computerFireSourceStream$ = this.computerFireSource.asObservable();

  constructor(
    private _shipPlacementService: ShipPlaceService,
    private _switchTurnService: SwitchTurnService,
    private _shotLogService: ShotLogService
  ) {
    this.setDifficulty(this.easy);
  }

  resetSubject() {
    this.computerFireSource.complete();
    console.log( 'resetting subscriptions' );
    this.computerFireSource = new Subject();
    this.computerFireSourceStream$ = this.computerFireSource.asObservable();
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

    } else {
      this._switchTurnService.switchTurn();
      if (this._switchTurnService.computerTurn) {
        this.compFire();
      }
    }
  }

  compFire (): void {
    const ships = this._shipPlacementService.playerShips;
    const board = this._shipPlacementService.playerBoard;

    let target = this.validateComputerShot (this.difficulty, board  );

    while (board[target.x][target.y].isShip) {
      board[target.x][target.y].state = 1;

      const ship = this.findShip(board[target.x][target.y], ships);
      this.hitShip(ship, ships);

      this.launchTorpedo(target);
      target = this.validateComputerShot (this.difficulty, this._shipPlacementService.playerBoard);
    }

    console.log(target, 'state before', board[target.x][target.y].state);
    board[target.x][target.y].state = 1;
    console.log(target, 'state after', board[target.x][target.y].state);
    this.launchTorpedo(target);

    console.log('switch works');
    this._switchTurnService.switchTurn();
    console.log('Human turn', this._switchTurnService.humanTurn);
    console.log('Comp turn', this._switchTurnService.computerTurn);
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

  launchTorpedo (coordinate: Coordinate) {
    this.computerFireSource.next(coordinate);
  }

  hitShip (target: Coordinate, ships: Ship[][]) {
    ships[target.x][target.y].decreaseHealth();
  }

  validateComputerShot (difficulty, tiles: Tile[][]) {
    let target = difficulty.call(this);

    while (tiles[target.x][target.y].state) {
      console.log('same target');
      target = difficulty.call(this);
    }
      return target;
  }

  easy () {
    return  new Coordinate (this._shipPlacementService.getRandomInt(0, 9), this._shipPlacementService.getRandomInt(0, 9));
  }

  setDifficulty (difficulty): void {
    this.difficulty = difficulty;
  }
}
