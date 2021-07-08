import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Monkey } from 'src/app/models/monkey.model';
import { Troop } from 'src/app/models/troop.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-troop',
  templateUrl: './troop.component.html',
  styleUrls: ['./troop.component.css']
})
export class TroopComponent implements OnInit,
  OnDestroy {
  troop$?: Observable<Troop>;
  @Output() monkeySelected = new EventEmitter<Monkey>();
  toggleCard = false;
  
  selectedMonkey?: Monkey;
  logger = '';
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.activeTroop$.subscribe(troop => 
      this.troop$ = of(troop));
  }
  populate(): void {
    this.troop$?.subscribe(
      (troop: Troop) => troop.populate());
  }
  age(): void {
    this.troop$?.subscribe(
      (troop: Troop) => troop.ageAll());
  }
  feed(): void {
    this.troop$?.subscribe(
      (troop: Troop) => troop.feedAll());
  }
  engage(): void {
    if (!this.troop$) return;
    this.troop$?.subscribe(
      (troop: Troop) => {
        this.logger = troop.engage();
      });
  }
  onMonkeySelect(id: number): void {
    this.troop$?.subscribe(
      (troop: Troop) => {
        let monkey = troop.monkeys.find(monkey => monkey.id === id);
        if (monkey) {
          this.monkeySelected.emit(monkey);
          this.selectedMonkey = monkey;
        }
      }); 
  }
  ngOnDestroy(): void {
  
  }
   
}
