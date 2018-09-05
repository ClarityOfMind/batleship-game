import { Component, OnInit, Input } from '@angular/core';
import { Ship } from '../../models/ship.model';
import Coordinate from '../../models/coordinate.model';
import { ShipPlaceService } from '../../services/ship-place-service/ship-place.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.styl']
})
export class PlayerComponent implements OnInit {
  @Input () name: string;
  public ships: Ship[][] = [];

  constructor(private _shipPlacementService: ShipPlaceService) {
  }

  ngOnInit() {
    this.ships = this._shipPlacementService.getShips(this.name);
  }
}


