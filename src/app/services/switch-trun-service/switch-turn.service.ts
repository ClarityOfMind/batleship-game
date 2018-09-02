import { Injectable } from '@angular/core';
import { FireService } from '../fire-service/fire.service';

@Injectable({
  providedIn: 'root'
})
export class SwitchTurnService {

  public humanTurn: boolean;
  public computerTurn: boolean;

  constructor(
  ) {
    this.humanTurn = true;
    this.computerTurn = !this.humanTurn;
  }

  switchTurn (): void {
    this.humanTurn = !this.humanTurn;
    this.computerTurn = !this.humanTurn;
  }

  getTurn () {
    if (this.humanTurn) {
      return 'AI';
    } else {
      return 'Human';
    }
  }
}
