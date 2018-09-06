import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import Coordinate from '../../models/coordinate.model';
import { SwitchTurnService } from '../../services/switch-trun-service/switch-turn.service';
import { FireService } from '../../services/fire-service/fire.service';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http-service/http.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.styl']
})
export class TileComponent implements OnInit {
  public status: string;
  private subscription: Subscription;
  @Input () position: Coordinate;
  @Input () state: number;
  @Input () isShip: boolean;
  @Input () isAroundShip: boolean;
  @Input () owner: string;

  @Output () getFiredByPlayer: EventEmitter<Coordinate> = new EventEmitter();

  public config: Object;
  constructor(
    private _switchTurnService: SwitchTurnService,
    private _fireService: FireService,
    private _httpService: HttpService
  ) {
  }

  ngOnInit() {
    this.subscribeToComputerShot(this.owner);
  }

  /**
  * Send position of a tile upon click.
  */
 clickOnTile (): void {
    if (this.state) {
      return;
    } else {
      this.updateView();
      this._fireService.getFiredByPlayer(this.position);
    }
  }

  updateView (): void {
      if (this.isShip) {
        this.status = 'dead';
      } else {
        this.status = 'miss';
      }
    this.getFiredByPlayer.emit(this.position);
  }

  getFiredByAi (target: Coordinate): void {
    if (this.state) {
      return;
    } else {
      this.updateView();
    }
  }

  subscribeToComputerShot (owner: string) {
    if (this.owner === 'Human') {
      this.subscription = this._fireService.computerFireSourceStream$
        .subscribe(coordinate => {
          if (this.position.x === coordinate.x && this.position.y === coordinate.y) {
            this.getFiredByAi(coordinate);
          }
        });
    }
  }
}
