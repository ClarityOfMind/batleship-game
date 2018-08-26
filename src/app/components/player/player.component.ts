import { Component, OnInit, Input } from '@angular/core';
import { Ship } from '../../models/ship.model';
import Coordinate from '../../models/coordinate.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.styl']
})
export class PlayerComponent implements OnInit {
  @Input () name: string;
  public positionAttacked: Coordinate;
  public id: number;
  public ships: Ship[][] = [];

  constructor() {
  }

  ngOnInit() {
    this.id = this.getUniqueId();
    this.generateShipArray();
  }

  generateShipArray (): void {
    for (let i = 0; i < 4; i++) {
      this.ships[i] = [];
     for (let j = 0; j < (i + 1); j++) {
       this.ships[i][j] = new Ship(i + 1);
     }
    }
  }

  getUniqueId (): number {
    return +new Date() / 1000;
  }

  getFired (position: Coordinate) {
    this.positionAttacked = position;
    console.log(this.positionAttacked);
  }
}


