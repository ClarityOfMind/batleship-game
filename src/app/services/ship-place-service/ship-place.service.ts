import { Injectable } from '@angular/core';
import Tile from '../../models/tile.model';
import Coordinate from '../../models/coordinate.model';
import { Ship } from '../../models/ship.model';

@Injectable({
  providedIn: 'root'
})
export class ShipPlaceService {

  public isActive: boolean;
  public ShipQty = 10;
  public ships: Ship  [][];
  public tiles: Tile  [][];

  constructor() {
    this.isActive = true;
    this.generateShipArray ();
    this.generateTileArray();
  }

  generateTileArray (): void {
    this.tiles = [];

    for (let i = 0; i < 10; i++) {
      this.tiles[i] = [];
      for (let j = 0; j < 10; j++) {
        this.tiles[i].push(new Tile(new Coordinate(i , j )));
      }
    }
  }

  generateShipArray (): void {
    this.ships = [];
    for (let i = 0; i < 4; i++) {
      this.ships[i] = [];
     for (let j = 0; j < (i + 1); j++) {
       this.ships[i][j] = new Ship(i + 1);
     }
    }
  }

  getShips () {
    return this.ships;
  }

  getTiles () {
    return this.tiles;
  }


  setRandomShips () {
    const ships = [
      [],
      [4],
      [3],
      [2],
      [1]
    ];
    for (let i = 1; i < ships.length; i++) {

      const shipLength: number = ships[i][0];

      for (let j = 0; j < i; j++) {
        this.validatePoint(this.tiles, shipLength);
      }
    }
  }

  validatePoint (tiles: Tile[][], shipLength: number) {
    const direction: {x: number, y: number} = {x: 0, y: 0};
        direction.x = this.getRandomInt(0, 1); // Define which direction vertical (0) or horizintal (1) should be checked first.
        direction.y = (direction.x === 0) ? 1 : 0;

        const randomPoint = this.getRandomPoint(shipLength, direction);

        const validPoint = this.validateShipLocation(this.tiles, randomPoint, direction, shipLength);

        if (validPoint) {
          if (direction.x) {
            for (let n = 0; n < shipLength; n++) {
              tiles[randomPoint.x + n][randomPoint.y].isAroundShip = false;
              tiles[randomPoint.x + n][randomPoint.y].isShip = true;
            }
          } else {
            for (let m = 0; m < shipLength; m++) {
              tiles[randomPoint.x][randomPoint.y + m].isAroundShip = false;
              tiles[randomPoint.x][randomPoint.y + m].isShip = true;
            }
          }
        } else {
          return  this.validatePoint (tiles, shipLength);
        }
  }

  getRandomPoint (shipLength: number, direction: {x: number, y: number}): Coordinate {
    const point: {x: number, y: number} = {x: 0, y: 0};

    if (direction.x) {
      point.x = this.getRandomInt(0, 10 - shipLength);
      point.y = this.getRandomInt(0, 9);
    } else {
      point.x = this.getRandomInt(0, 9);
      point.y = this.getRandomInt(0, 10 - shipLength);
    }
    return point;
  }

  validateShipLocation (tiles: Tile[][], point: {x: number, y: number}, direction: {x: number, y: number}, shipLength: number): boolean {

    const startPointX = (point.x === 0) ? point.x : point.x - 1;
    const startPointY = (point.y === 0) ? point.y : point.y - 1;
    let endPointX: number;
    let endPointY: number;

    if (point.x + shipLength === 10 && direction.x) { // Vertical ship stuck to bottom
      endPointX = point.x + shipLength - direction.x;
    } else if (point.x + shipLength < 10 && direction.x) { // Vertical ship isn't stuck to bottom
      endPointX = point.x + shipLength;
    } else if (point.x === 9 && !direction.x) { // Horizontal ship stuck to bottom
      endPointX = point.x;
    } else if (point.x === 9 && direction.x && shipLength === 1) {
      endPointX = point.x;
    } else if (point.x < 9 && direction.x && shipLength === 1) {
      endPointX = point.x;
    } else if (point.x < 9 && !direction.x) { // Horizontal ship isn't stuck to bottom
      endPointX = point.x + 1;
    }

    if (point.y + shipLength === 10 && direction.y) { // Horizontal ship stuck to right
      endPointY = point.y + shipLength - direction.y;
    } else if (point.y + shipLength < 10 && direction.y) { // Horizontal ship isn't stuck to right
      endPointY = point.y + shipLength;
    } else if (point.y === 9 && !direction.y) { // Vertical ship stuck to left
      endPointY = point.y;
    } else if (point.x === 9 && direction.y && shipLength === 1) {
      endPointX = point.y;
    } else if (point.x < 9 && direction.y && shipLength === 1) {
      endPointX = point.y;
    } else if (point.y < 9 && !direction.y) { // Vertical ship isn't stuck to left
      endPointY = point.y + 1;
    }

    for (let i = startPointX; i < endPointX + 1; i++ ) {
      for (let j = startPointY; j < endPointY + 1; j++) {
        if (tiles[i][j].isShip) {
          return false;
        }
      }
    }

    for (let i = startPointX; i < endPointX + 1; i++ ) {
      for (let j = startPointY; j < endPointY + 1; j++) {
        tiles[i][j].isAroundShip = true;
      }
    }
    return true;
  }

  getRandomInt (min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
