import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
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
  troop?: Troop;
  @Output() monkeySelected = new EventEmitter<Monkey>();
  toggleCard = false;
  
  selectedMonkey?: Monkey;
  logger = '';
  constructor(private appService: AppService) { 
    this.troop = this.appService.activeTroop;
  }

  ngOnInit(): void {
    console.log('Troop', this.troop);
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
      let monkey = this.troop?.monkeys.find(monkey => monkey.id === id);
      // Also emit the selected monkey
      if (monkey) {
        this.monkeySelected.emit(monkey);
        this.selectedMonkey = monkey;
      }
  }
   
}
