import { Component, OnInit, Input } from '@angular/core';
import Coordinate from '../../models/coordinate.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.styl']
})
export class TileComponent implements OnInit {
  @Input () position: Coordinate;
  @Input () isShip: boolean;
  @Input () isAroundShip: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  /* sendPosition (position: Coordinate) {
    return this.position.emit();
  } */

  /* onClick () {

    if (this._shipPlacementService.isActive) {
      if (this.isShip === true) {
        this.isShip = false;
      } else {
        this.isShip = true;
      }
    }
  } */
}
