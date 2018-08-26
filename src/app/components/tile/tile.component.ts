import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Coordinate from '../../models/coordinate.model';
import { SwitchTurnService } from '../../services/switch-trun-service/switch-turn.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.styl']
})
export class TileComponent implements OnInit {
  @Input () position: Coordinate;
  @Input () isShip: boolean;
  @Input () isAroundShip: boolean;
  @Input () owner: string;

  @Output () clickOnTile: EventEmitter<Coordinate> = new EventEmitter();

  constructor(private _swtchTurnService: SwitchTurnService) {
  }

  ngOnInit() {
  }

  /**
  * Send position of a tile upon click.
  */
  getFiredByPlayer (event): void {
    if (this._swtchTurnService.humanTurn) {
      this.clickOnTile.emit(this.position);
    }
  }

}
