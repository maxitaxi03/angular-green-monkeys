import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Monkey } from 'src/app/models/monkey.model';
import { Troop } from 'src/app/models/troop.model';

@Component({
  selector: 'monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.css']
})
export class MonkeyComponent implements OnInit{
  @Input('monkey') monkey?: Monkey;
  @Input('monkey$') monkey$?: Observable<Monkey>;
  //monkey$?: Observable<Monkey>;
  myTroop!: Troop;
  
  constructor(private appService: AppService) { }

  ngOnInit(): void {
   
  }
  
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
