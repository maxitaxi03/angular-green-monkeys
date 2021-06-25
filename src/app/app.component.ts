import { Component, Output, EventEmitter } from '@angular/core';
import { Monkey } from './models/monkey.model';
import { Region } from './models/region.model';
import  { Troop } from './models/troop.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GreenMonkeys Angular';
  region: Region;
  activeTroop?: Troop;
  activeMonkey?: Monkey;
  activeRegion?: Region;
  selectedRegion?: Region;
  @Output() regionSelected = new EventEmitter<Region>();

  constructor() {
    this.region = new Region('Barbados');
    this.activeRegion = this.region;
  }

  addNewTroop(name: string): void {
    let troop = new Troop(name);
    troop.populate();
    this.region.troops.push(troop);
  }
  onTroopSelected(troop: any) {
    this.activeTroop = troop; 
  }
  onMonkeySelected(monkey: any) {
    this.activeMonkey = monkey;
  }
  
  
}
