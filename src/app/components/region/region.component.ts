import { Component, OnInit } from '@angular/core';
import { Troop } from 'src/app/models/troop.model';
import { Region } from '../../models/region.model';

@Component({
  selector: 'region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  region: Region = new Region('');
  troop: Troop = new Troop('');

  constructor() { }

  ngOnInit(): void {
  }
  update(e: any) {
    this.region.update(e);
  }
  createNewTroop() {
    
  }
}
