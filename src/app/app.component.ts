import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.service';
import { Monkey } from './models/monkey.model';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';
import  { Observable, of, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'GreenMonkeys Angular';
  region: Region;
  activeTroop$?: Observable<Troop>;
  activeMonkey?: Monkey;
  activeRegion?: Region;
  selectedRegion?: Region;
  @Output() regionSelected = new EventEmitter<Region>();
  monkeys$!: Observable<Monkey[]>;
  private monkeySearchTerms = new Subject<string>();

  constructor(private appService: AppService) {
    this.appService.createRegion('Barbados');
    this.region = this.appService.region;
  }
  ngOnInit() {
    this.appService.user$.subscribe(console.log);
    this.appService.orders$.subscribe(console.log);
    this.monkeys$ = this.monkeySearchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.appService.searchMonkeys(term)),
    );
    this.appService.activeTroop$.subscribe(troop => this.activeTroop$ = of(troop));
  }
  searchMonkeys(term: string): void {
    this.monkeySearchTerms.next(term);
  }
  addNewTroop(name: string): void {
    this.appService.addNewTroopToRegion(name);
  }
  onTroopSelected(troop: any) {
    this.appService.activeTroop = of<Troop>(troop);
    this.activeTroop$ = this.appService.activeTroop; // Contrived example
    console.log(`Troop ${troop.name} is now active.`);
  }
  onMonkeySelected(monkey: any) {
    this.activeMonkey = monkey;
    this.monkeySearchTerms.next('');
    console.log(`${monkey.name} is now active.`);
  }
}
