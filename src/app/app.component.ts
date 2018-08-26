import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  public player1 = 'Human';
  public player2 = 'AI';
  public turn: string;

  constructor() {
  }
}
