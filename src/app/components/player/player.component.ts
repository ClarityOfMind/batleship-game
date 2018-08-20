import { Component, OnInit } from '@angular/core';
import { Ship } from '../../models/ship.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.styl']
})
export class PlayerComponent implements OnInit {
  public name = 'Player';
  public id = +new Date() / 1000;
  public ships: Ship[][] = [];

  constructor() {
     for (let i = 0; i < 4; i++) {
       this.ships[i] = [];
      for (let j = 0; j < (i + 1); j++) {
        this.ships[i][j] = new Ship(i + 1);
      }
    }
  }

  ngOnInit() {
  }

}


