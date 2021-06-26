import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Monkey } from 'src/app/models/monkey.model';
import { Troop } from 'src/app/models/troop.model';

@Component({
  selector: 'monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.css']
})
export class MonkeyComponent {
  @Input('monkey') monkey?: Monkey;
  myTroop!: Troop;
  constructor(private appService: AppService) { }
  findMyTroop(): void {
   if (!this.monkey) return;
   const troop = this.appService.findTroop(this.monkey.troopId);
   if (troop) {
     this.myTroop = troop;
     troop.name = 'St Michael';
     console.log('Troop', troop);
   }
  }
}
