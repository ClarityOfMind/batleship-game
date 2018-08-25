import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './components/tile/tile.component';
import { BattlefieldComponent } from './components/battlefield/battlefield.component';
import { PlayerComponent } from './components/player/player.component';
import { PortComponent } from './components/port/port.component';
import { ShipComponent } from './components/ship/ship.component';
import { ShipPlaceService } from './services/ship-place/ship-place.service';
import { SwitchTurnService } from './services/switch-trun/switch-turn.service';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    BattlefieldComponent,
    PlayerComponent,
    PortComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ShipPlaceService,
    SwitchTurnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
