import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.service';
import { Monkey } from './models/monkey.model';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'GreenMonkeys Angular';
  region: Region;
  activeTroop?: Troop;
  activeMonkey?: Monkey;
  activeRegion?: Region;
  selectedRegion?: Region;
  @Output() regionSelected = new EventEmitter<Region>();

  constructor(private appService: AppService) {
    this.appService.createRegion('Barbados');
    this.region = this.appService.region; 
  }
  ngOnInit() {}

  addNewTroop(name: string): void {
    this.appService.addNewTroopToRegion(name);
  }
  onTroopSelected(troop: any) {
    this.appService.activeTroop = troop;
    this.activeTroop = this.appService.activeTroop;
    console.log('Active Troop', this.appService.activeTroop); 
  }
  onMonkeySelected(monkey: any) {
    this.activeMonkey = monkey;
  }
}
