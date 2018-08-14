import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.styl']
})
export class TileComponent implements OnInit {
  @Input () position: {
    x: number,
    y: number
  };
  public classList = {
      main: 'Tile',
      modMissed: 'Tile--missed',
  };
  public isShip = false;

  constructor() {
  }

  ngOnInit() {
  }

}
