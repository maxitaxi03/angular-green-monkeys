import { Component, OnInit, Output, EventEmitter, DoCheck, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Monkey } from './models/monkey.model';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';
import  { Observable, of, BehaviorSubject } from 'rxjs';

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
  activeMonkeyB$!: BehaviorSubject<Monkey>;
  activeMonk!: Monkey;
  activeMonkey!: Monkey;
  activeRegion?: Region;
  selectedRegion?: Region;
  @Output() regionSelected = new EventEmitter<Region>();

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
    this.appService.activeMonkeySub.subscribe(monkey => this.activeMonk = monkey);
  }
  ngOnDestroy(): void {}
  ngDoCheck(): void {
    this.activeMonkey$ = this.appService.activeMonkey;
    this.activeMonkey$?.subscribe(monkey => {
      this.activeMonkey = monkey;
      console.log(monkey.name);
    });
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
    this.appService.activeMonkey = of<Monkey>(monkey); // What's this?
    this.activeMonkey$ = this.appService.activeMonkey;
    console.log(`Monkey ${monkey.name} is now active`);
  }
}
