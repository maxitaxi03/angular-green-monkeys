import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import  { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Monkey } from 'src/app/models/monkey.model';
import { Troop } from 'src/app/models/troop.model';
@Component({
  selector: 'app-troop',
  templateUrl: './troop.component.html',
  styleUrls: ['./troop.component.css']
})
export class TroopComponent implements OnInit,
  OnDestroy {
  troop?: Troop;
  troopSubscription!: Subscription;
  @Output() monkeySelected = new EventEmitter<Monkey>();
  toggleCard = false;
  
  selectedMonkey?: Monkey;
  logger = '';
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.troopSubscription = this.appService.activeTroop$.subscribe(troop => 
      this.troop = troop);
  }
  populate(): void {
    this.troop?.populate();
  }
  age(): void {
    this.troop?.ageAll();
  }
  feed(): void {
    this.troop?.feedAll();
  }
  engage(): void {
    if (!this.troop) return;
    this.logger = this.troop?.engage();
  }
  onMonkeySelect(id: number): void {
    let monkey = this.troop?.monkeys.find(monkey => monkey.id === id);
    if (monkey) {
      this.monkeySelected.emit(monkey);
      this.selectedMonkey = monkey;
    }
  }
  ngOnDestroy(): void {
    this.troopSubscription.unsubscribe();
  }
   
}
