import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Troop } from 'src/app/models/troop.model';
import { Region } from '../../models/region.model';
import { Monkey } from '../../models/monkey.model';

@Component({
  selector: 'region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  @Input('region') region!: Region;
  selectedTroop?: Troop;
  
  @Output() troopSelected = new EventEmitter<Troop>();
 
  constructor() {
    console.log('Con ', this.region);
  }
  ngOnInit() {
    console.log('OnInit ', this.region);
    this.region.createNewTroop('Boyys');
  }

  
    onTroopSelected(event: any): void {
    const name = event.target.value;
    if (name === "") {this.selectedTroop = undefined; }
    else {
      let troop = this.region.troops.find(troop => troop.name === name);
      if (troop) {
        this.troopSelected.emit(troop); 
        this.selectedTroop = troop; 
      }
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
