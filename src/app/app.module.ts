import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TroopComponent } from './components/troop/troop.component';
import { RegionComponent } from './components/region/region.component';
import { MonkeyComponent } from './components/monkey/monkey.component';
import { TroopSearchComponent } from './components/troop-search/troop-search.component';
import { MonkeySearchComponent } from './components/monkey-search/monkey-search.component';
import { MonkeyFormComponent } from './components/monkey-form/monkey-form.component';
import { FormsModule } from '@angular/forms';
import { PageErrorComponent } from './components/page-error/page-error.component';

@NgModule({
  declarations: [
    AppComponent,
    TroopComponent,
    StatisticsComponent,
    RegionComponent,
    MonkeyComponent,
    TroopSearchComponent,
    MonkeySearchComponent,
    MonkeyFormComponent,
    PageErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

