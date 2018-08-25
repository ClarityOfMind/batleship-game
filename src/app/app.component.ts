import { Component} from '@angular/core';
import { SwitchTurnService } from './services/switch-trun/switch-turn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  public player1 = 'Human';
  public player2 = 'AI';
  public turn: string;

  constructor(private _switchTurnService: SwitchTurnService) {
    this.turn = _switchTurnService.turn;
  }
}
