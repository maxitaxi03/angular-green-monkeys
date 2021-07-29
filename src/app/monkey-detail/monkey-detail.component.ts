import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import { Monkey } from '../models/monkey.model';

@Component({
  selector: 'app-monkey-detail',
  templateUrl: './monkey-detail.component.html',
  styleUrls: ['./monkey-detail.component.css']
})
export class MonkeyDetailComponent implements OnInit {
  monkey!: Monkey;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private appService: AppService) { }

  ngOnInit(): void {
    this.getMonkey();
  }
  getMonkey(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    const monkey = this.appService.findMonkeyById(id);
    if (monkey) {
      console.log(id, monkey);
      this.monkey = monkey;
    }
    console.log(monkey);
  }
  editMonkey(): void {
    // route to /monkeys/id/edit from here
  }
  goBack(): void {
    this.location.back();
  }
}
