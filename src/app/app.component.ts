import { Component, OnInit, Output, EventEmitter, DoCheck, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Monkey } from './models/monkey.model';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';
import  { Observable, of, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck, OnDestroy {
  title = 'GreenMonkeys Angular';
  region: Region;
  activeTroop$?: Observable<Troop>;
  activeMonkey$?: Observable<Monkey>;
  activeMonkey!: Monkey;
  showMonkeyForm = false;
  @Output() regionSelected = new EventEmitter<Region>();
  activeMonkeySubscription!: Subscription;
  private monkeySearchTerms = new Subject<string>();

  constructor(private appService: AppService) {
    this.appService.createRegion('Barbados');
    this.region = this.appService.region;

  }
  ngOnInit() {
    this.activeMonkey$ = this.appService.activeMonkey;
    this.activeMonkey$?.subscribe(monkey => {
      this.activeMonkey = monkey;
      console.log(monkey.name);
    });
    this.activeMonkeySubscription = this.appService.activeMonkey$.subscribe(monkey => this.activeMonkey = monkey);
  }

  ngDoCheck(): void {
    this.activeMonkey$ = this.appService.activeMonkey;
    this.activeMonkey$?.subscribe(monkey => {
      this.activeMonkey = monkey;
      console.log(monkey.name);
    });
  }
  searchMonkeys(term: string): void {
    this.monkeySearchTerms.next(term);
  }
  addNewTroop(name?: string): void {
    this.appService.addNewTroopToRegion(name);
  }
  onTroopSelected(troop: any) {
    this.appService.activeTroop = of<Troop>(troop);
    this.activeTroop$ = this.appService.activeTroop; // Contrived example
    console.log(`Troop ${troop.name} is now active.`);
  }
  onMonkeySelected(monkey: any) {
    // this.appService.activeMonkey = of<Monkey>(monkey); // What's this?
    // this.activeMonkey$ = this.appService.activeMonkey;
    this.activeMonkey = monkey;
    this.monkeySearchTerms.next('');
    console.log(`Monkey ${monkey.name} is now active`);
  }
  ngOnDestroy(): void {
    this.activeMonkeySubscription.unsubscribe();
  }
}
