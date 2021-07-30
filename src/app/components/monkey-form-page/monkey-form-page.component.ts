import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Monkey } from 'src/app/models/monkey.model';
import { IMonkey } from 'src/app/interfaces/monkey.interface';
@Component({
  selector: 'app-monkey-form-page',
  templateUrl: './monkey-form-page.component.html',
  styleUrls: ['./monkey-form-page.component.css']
})
export class MonkeyFormPageComponent implements OnInit {
  monkey!: IMonkey;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private appService: AppService,
    private router: Router
    ) { }

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
  editMonkey(): void {
    // route to /monkeys/id/edit from here
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/monkeys/${this.monkey.id}/edit`]);
    

  }
  goBack(): void {
    this.location.back();
  }
 
}
