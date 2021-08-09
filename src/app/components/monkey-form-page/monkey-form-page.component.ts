import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Monkey } from 'src/app/models/monkey.model';
import { Subscription } from 'rxjs';
import { Troop } from 'src/app/models/troop.model';

@Component({
  selector: 'app-monkey-form-page',
  templateUrl: './monkey-form-page.component.html',
  styleUrls: ['./monkey-form-page.component.css'],
})
export class MonkeyFormPageComponent implements OnInit {
  monkey!: Monkey;
  troop!: Troop;
  monkeySubscription!: Subscription;
  troopListSubscription!: Subscription;
  troops: { id: string; name: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMonkey();
    this.getTroop()
    this.troopListSubscription = this.appService.troopList.subscribe(
      (list) => (this.troops = list)
    );
    this.monkeySubscription = this.appService.activeMonkey$.subscribe(
      (monkey) => (this.monkey = monkey)
    );

  }
  getMonkey(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      let monkey = new Monkey();
    } 
    else {
      const monkey = this.appService.findMonkeyById(id);
      if (monkey) {
        this.monkey = monkey;
      }
      console.log(monkey);
    }
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
  editMonkey(): void {
    // route to /monkeys/id/edit from here
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/monkeys/${this.monkey.id}/edit`]);
  }
  goBack(): void {
    this.location.back();
  }
}
