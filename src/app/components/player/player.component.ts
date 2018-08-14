import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.styl']
})
export class PlayerComponent implements OnInit {
  name = 'Player';
  constructor() { }

  ngOnInit() {
  }

}
