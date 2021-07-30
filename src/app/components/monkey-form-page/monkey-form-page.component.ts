import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { Monkey } from 'src/app/models/monkey.model';
@Component({
  selector: 'app-monkey-form-page',
  templateUrl: './monkey-form-page.component.html',
  styleUrls: ['./monkey-form-page.component.css']
})
export class MonkeyFormPageComponent implements OnInit {
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
      this.monkey = monkey;
    }
    console.log(monkey);
  }
 
}
