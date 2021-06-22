import { Component } from '@angular/core';
import  { Troop } from './models/troop.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GreenMonkeys Angular';
  region: Troop[] = [];
  activeTroop?: Troop;

  addNewTroop(name: string): void {
    let troop = new Troop(name);
    troop.populate();
    this.region.push(troop);
  }
  onTroopSelected(troop: any) {
    this.activeTroop = troop; 
  }

}
