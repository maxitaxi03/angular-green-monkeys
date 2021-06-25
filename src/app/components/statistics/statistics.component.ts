import { Component, Input } from '@angular/core';
import { Region } from '../../models/region.model';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input('region')region?: Region;
  revealStats = false;
  stats = {
    monkeyCount: 0,
    mutantMonkeysCount: 0,
    normalMonkeys: 0
  }
  toggle = false;
  constructor() { 
   // console.log('Stats Constructor ' + JSON.stringify(this.stats));
  }
  
  refreshStats(): void {
    if (!this.region) return;
    console.log(this.region.toString());
    this.revealStats = !this.revealStats;
    this.stats = {
    monkeyCount: this.region.getMonkeyCount(),
    mutantMonkeysCount: this.region.grandTotalMutants(),
    normalMonkeys: this.region.grandTotalNormal(),
    }
    // console.log('refreshStats() ' + JSON.stringify(this.stats));
  }

}
