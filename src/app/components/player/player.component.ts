import { Component, OnInit, Input } from '@angular/core';
import { Ship } from '../../models/ship.model';
import { BehaviorSubject } from 'rxjs';
import Behaviour from '../../behaviour/behaviour';
import Tile from '../../models/tile.model';
import { SwitchTurnService } from '../../services/switch-trun/switch-turn.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.styl']
})
export class PlayerComponent implements OnInit {
  @Input () name: string;
  @Input () behaviour: Behaviour;
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
}


