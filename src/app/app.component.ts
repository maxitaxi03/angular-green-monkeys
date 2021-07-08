import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Monkey } from './models/monkey.model';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';
import  { Observable, Subject, Subscription } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'GreenMonkeys Angular';
  region: Region;
  activeTroop?: Troop;
  activeMonkey?: Monkey;
  activeRegion?: Region;
  selectedRegion?: Region;
  @Output() regionSelected = new EventEmitter<Region>();
  monkeys$!: Observable<Monkey[]>;
  private monkeySearchTerms = new Subject<string>();
  activeTroopSubscription!: Subscription;

  constructor(private appService: AppService) {
    this.appService.createRegion('Barbados');
    this.region = this.appService.region;
  }
  ngOnInit() {
    this.monkeys$ = this.monkeySearchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.appService.searchMonkeys(term)),
    );
    this.activeTroopSubscription = this.appService.activeTroop$
      .subscribe(troop => this.activeTroop = troop);
  }
  searchMonkeys(term: string): void {
    this.monkeySearchTerms.next(term);
  }
  addNewTroop(name: string): void {
    this.appService.addNewTroopToRegion(name);
  }
  onTroopSelected(troop: any) {
    this.appService.changeActiveTroop(troop);
    console.log(`Troop ${troop.name} is now active.`);
  }
  onMonkeySelected(monkey: any) {
    this.activeMonkey = monkey;
    this.monkeySearchTerms.next('');
    console.log(`${monkey.name} is now active.`);
  }
  ngOnDestroy() {
    this.activeTroopSubscription.unsubscribe();
  }
}
