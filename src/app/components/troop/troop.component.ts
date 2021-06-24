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
  logger = '';
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
    if (!this.troop) return;
    this.logger = this.troop.engage();
  }
  onMonkeySelect(id: number): void {
      this.selectedMonkey = this.troop?.monkeys.find(monkey => monkey.id === id);
      // Also emit the selected monkey
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
