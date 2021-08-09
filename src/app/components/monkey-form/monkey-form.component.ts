import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { monkeyForm } from 'src/app/models/monkey-form.model';
import { IMonkey } from '../../interfaces/monkey.interface';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-monkey-form',
  templateUrl: './monkey-form.component.html',
  styleUrls: ['./monkey-form.component.css'],
})
export class MonkeyFormComponent implements OnInit, OnDestroy  {

  monkeyForm: monkeyForm = new monkeyForm();
  @Input('monkey')monkey!: IMonkey;
  activeMonkey!: IMonkey;
  @ViewChild('f') form: any;
  monkeySubscription!: Subscription;
  troopListSubscription!: Subscription;
  troops: {id: string, name: string}[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private appService: AppService,
    private router: Router,
    ) { }
  ngOnInit(): void {
    this.troopListSubscription = this.appService.troopList.subscribe(list => this.troops = list);
    this.monkeySubscription = this.appService.activeMonkey$.subscribe(monkey => this.monkey = monkey);
    console.log(`the active monkey in appservice is ${this.monkey.name}`);
  }

  onTroopSelected(event: any): void {
     //this.monkeyForm.troopId = event.target.value;
  }
  onSubmit() {
    if (this.form.valid) {
      this.appService.saveMonkey({
        name: this.monkeyForm.name,
        age: this.monkeyForm.age,
        weight: this.monkeyForm.weight,
        troopId: this.monkeyForm.troopId,
        gender: this.monkeyForm.gender,
        isAlive: true
      });
      this.form.reset();
      this.location.back();
    }
  }

  ngOnDestroy(): void {
    this.monkeySubscription.unsubscribe();
    this.troopListSubscription.unsubscribe();
  }

}
