import { Component } from '@angular/core';
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

  constructor() {
    this.region = new Region('Barbados');
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
