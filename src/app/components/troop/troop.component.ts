import { Component, Input, OnInit } from '@angular/core';
import { Monkey } from 'src/app/models/monkey.model';
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
  selectedMonkey?: Monkey;
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
  onMonkeySelect(event: any): void {
    const name = event.target.value; 
      this.selectedMonkey = this.troop?.monkeys.find(monkey => monkey.name === name);
      console.log(this.troop?.monkeys.length)
    
    
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
