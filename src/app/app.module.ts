import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TroopComponent } from './components/troop/troop.component';
import { RegionComponent } from './components/region/region.component';
import { MonkeyComponent } from './components/monkey/monkey.component';

@NgModule({
  declarations: [
    AppComponent,
    TroopComponent,
    StatisticsComponent,
    RegionComponent,
    MonkeyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
