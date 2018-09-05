import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './components/tile/tile.component';
import { BattlefieldComponent } from './components/battlefield/battlefield.component';
import { PlayerComponent } from './components/player/player.component';
import { PortComponent } from './components/port/port.component';
import { ShipComponent } from './components/ship/ship.component';
import { ShipPlaceService } from './services/ship-place-service/ship-place.service';
import { SwitchTurnService } from './services/switch-trun-service/switch-turn.service';
import { ShotLogComponent } from './components/shot-log/shot-log.component';
import { ShotLogService } from './services/shot-log-service/shot-log.service';
import { FireService } from './services/fire-service/fire.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    BattlefieldComponent,
    PlayerComponent,
    PortComponent,
    ShipComponent,
    ShotLogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ShipPlaceService,
    SwitchTurnService,
    ShotLogService,
    FireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
