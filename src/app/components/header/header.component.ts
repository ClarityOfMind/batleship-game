import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  public title = 'Battleship-game';
  public sourceCodeUrl: 'https://github.com/ClarityOfMind/battleship-game';
  constructor() { }

  ngOnInit() {
  }

}
