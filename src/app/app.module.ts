import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonkeyComponent } from './monkey/monkey.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TroopComponent } from './troop/troop.component';

@NgModule({
  declarations: [
    AppComponent,
    MonkeyComponent,
    StatisticsComponent,
    TroopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
