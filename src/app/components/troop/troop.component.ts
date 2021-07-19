import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, DoCheck } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Monkey } from 'src/app/models/monkey.model';
import { Troop } from 'src/app/models/troop.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-troop',
  templateUrl: './troop.component.html',
  styleUrls: ['./troop.component.css']
})
export class TroopComponent implements OnInit,
  OnDestroy, DoCheck {
  troop$?: Observable<Troop>;
  @Output() monkeySelected = new EventEmitter<Monkey>();
  toggleCard = false;
  
  selectedMonkey?: Monkey;
  logger = '';
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.troop$ = this.appService.activeTroop;
    this.troop$?.subscribe(
      (troop: Troop) => console.log('TroopComponent Troop', troop));
  }
  // https://angular.io/guide/lifecycle-hooks#docheck
  ngDoCheck(): void {
    this.troop$ = this.appService.activeTroop;
    this.troop$?.subscribe(
      (troop: Troop) => console.log('TroopComponent Troop', troop));
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
  onMonkeySelect(id: string): void {
    this.troop$?.subscribe(
      (troop: Troop) => {
        let monkey = troop.monkeys.find(monkey => monkey.id === id);
        if (monkey) {
          this.monkeySelected.emit(monkey);
          this.selectedMonkey = monkey;
        }
      }); 
  }
  ngOnDestroy(): void {}
   
}
