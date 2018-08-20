import { Component, OnInit } from '@angular/core';
import { ShipPlaceService } from '../../services/ship-place/ship-place.service';
import Tile from '../../models/tile.model';

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

  public positionX: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  public positionY: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public tiles: Tile[][];

  constructor(private _shipPlacementService: ShipPlaceService) {
  }

  ngOnInit() {
    this.tiles = this._shipPlacementService.generateTileArray();
  }

  setupShipsRandomly () {
    this.tiles = [];
    this.tiles = this._shipPlacementService.generateTileArray();
    this._shipPlacementService.setRandomShips(this.tiles);

  }
}
