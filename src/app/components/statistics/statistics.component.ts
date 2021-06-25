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
  constructor() { 
    
  }


  

}
