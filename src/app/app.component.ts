import { Component, Output, EventEmitter } from '@angular/core';
import { Monkey } from './models/monkey.model';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
  }

  addNewTroop(name: string): void {
    this.region.createNewTroop(name);
  }
  onTroopSelected(troop: any) {
    this.activeTroop = troop;
  }
  onMonkeySelected(monkey: any) {
    this.activeMonkey = monkey;
  }
}
