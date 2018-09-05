import { Component, OnInit, Input, Output } from '@angular/core';
import { ShipPlaceService } from '../../services/ship-place-service/ship-place.service';
import Tile from '../../models/tile.model';
import Coordinate from '../../models/coordinate.model';
import { SwitchTurnService } from '../../services/switch-trun-service/switch-turn.service';
import { ShotLogService } from '../../services/shot-log-service/shot-log.service';
import { EventEmitter } from 'protractor';
import { FireService } from '../../services/fire-service/fire.service';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.styl']
})
export class BattlefieldComponent implements OnInit {

  public options: {
    battlefieldSize: {
      'standard': 10
    }
  };
  public positionX: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public positionY: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  public tiles: Tile[][];
  @Input () owner: string;

  constructor(
    private _shipPlacementService: ShipPlaceService,
    private _switchTurnService: SwitchTurnService,
    private _shotLogService: ShotLogService,
    private _fireService: FireService
  ) {
  }

  ngOnInit() {
    this.initBoard(this.owner);
    this.setupShipsRandomly();
  }

  setupShipsRandomly () {
    this.tiles = [];
    this._shipPlacementService.generateTileArray(this.owner);
    this._shipPlacementService.setRandomShips(this.owner);
    this.initBoard(this.owner);

    if (this.owner === 'Human') {
      this._fireService.resetSubject();
    }
  }

  getFired (position: Coordinate) {
    this._shotLogService.log(this. owner, this.positionY[position.y] + '-' + this.positionX[position.x]);
  }

  initBoard (owner: string) {
    if (owner === 'Human') {
      this.tiles = this._shipPlacementService.playerBoard;
    } else {
      this.tiles = this._shipPlacementService.computerBoard;
    }
  }
}
