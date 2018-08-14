import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './components/tile/tile.component';
import { BattlefieldComponent } from './components/battlefield/battlefield.component';
import { PlayerComponent } from './components/player/player.component';
import { PortComponent } from './components/port/port.component';
import { ShipComponent } from './components/ship/ship.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
