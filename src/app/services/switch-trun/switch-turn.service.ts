import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchTurnService {

  public humanTurn: boolean;
  public computerTurn: boolean;

  constructor() {
    this.humanTurn = true;
    this.computerTurn = !this.humanTurn;
  }

  switchTurn (): void {
    this.humanTurn = !this.humanTurn;
    this.computerTurn = !this.humanTurn;
  }
}
