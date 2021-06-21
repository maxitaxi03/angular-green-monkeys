import { Component, Input, OnInit } from '@angular/core';
import { Troop } from 'src/app/models/troop.model';

@Component({
  selector: 'app-troop',
  templateUrl: './troop.component.html',
  styleUrls: ['./troop.component.css']
})
export class TroopComponent implements OnInit {
  // troops: Troop[] = [];
  // troop?: Troop;
  @Input('troop') troop?: Troop;
  constructor() { }

  ngOnInit(): void {
    
  }
 
  populate() {
    this.troop?.populate();
  }
  age() {
    this.troop?.ageAll();
  }
  feed() {
    this.troop?.feedAll();
  }
  engage() {
    this.troop?.engage();
  }
   /*
  populate() {
    this.troops.forEach(troop => troop.populate());
  }
  age() {
    this.troops.forEach(troop => troop.ageAll());
  }
  feed() {
    this.troops.forEach(troop => troop.feedAll());
  }
  engage() {
    this.troops.forEach(troop => troop.engage());
  } */
}
