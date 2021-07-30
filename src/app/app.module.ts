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
import { TroopDetailComponent } from './components/troop-detail/troop-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonkeyDetailComponent } from './components/monkey-detail/monkey-detail.component';
import { MonkeyFormPageComponent } from './components/monkey-form-page/monkey-form-page.component';

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
    TroopDetailComponent,
    DashboardComponent,
    MonkeyDetailComponent,
    MonkeyFormPageComponent,
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

