import { Component, OnInit } from '@angular/core';

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
  positionX: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  positionY: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public tiles = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.tiles[i] = [];
      for (let j = 1; j <= 10; j++) {
        this.tiles[i].push(j);
      }
    }
  }
}
