import { Component } from '@angular/core';
import { Troop } from 'src/app/models/troop.model';
import { Region } from '../../models/region.model';

@Component({
  selector: 'region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {
  region: Region;
  selectedTroop?: Troop;


  constructor() { 
    this.region = new Region();
  }
  
  
  onTroopSelected(event: any): void {
    const name = event.target.value;
    if (name === "") {
      this.selectedTroop = undefined;
    } else {
    this.selectedTroop = this.region.troops.find(troop => troop.name === name);
    }
  }
  createNewTroop(name?: string) {
    if (name) {
    this.region.createNewTroop(name);
    console.log('Created new troop named ' + name + '.');
    } else {
      this.region.createNewTroop();
      console.log('Created new troop.');
    }
  }
}
