import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Monkey } from 'src/app/models/monkey.model';
import { Troop } from 'src/app/models/troop.model';

@Component({
  selector: 'monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.css']
})
export class MonkeyComponent implements OnInit, OnDestroy{
  @Input('monkey') monkey?: Monkey;
  //@Input('monkey$') monkey$?: Observable<Monkey>;
  monkeySubscription!: Subscription;
  //monkey$?: Observable<Monkey>;
  myTroop!: Troop;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.monkeySubscription = this.appService.activeMonkey$.subscribe(monkey => this.monkey = monkey);
  }

  findMyTroop(): void {
   if (!this.monkey) return;
   const troop = this.appService.findTroopById(this.monkey.troopId);
   if (troop) {
     this.myTroop = troop;
     console.log('Troop', troop);
   }
  }
  ngOnDestroy(): void {
    this.monkeySubscription.unsubscribe();
  }
}
