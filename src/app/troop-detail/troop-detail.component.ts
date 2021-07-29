import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Troop } from '../models/troop.model';


@Component({
  selector: 'app-troop-detail',
  templateUrl: './troop-detail.component.html',
  styleUrls: ['./troop-detail.component.css']
})
export class TroopDetailComponent implements OnInit {
  troop!: Troop;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getTroop();
  }
  getTroop(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    const troop = this.appService.findTroopById(id);
    if (troop) {
      this.troop = troop;
    }
    console.log(troop);
  }
  goBack(): void {
    this.location.back();
  }

}
