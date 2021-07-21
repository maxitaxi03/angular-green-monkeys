import { Component, OnInit, Input, ViewChild, OnDestroy, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { monkeyForm } from 'src/app/models/monkey-form.model';
import { IMonkey } from '../interfaces/monkey.interface';
import { Observable, of, BehaviorSubject, Subscription, Subject } from 'rxjs';

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
  private monkeySearchTerms = new Subject<string>();
  


  constructor(private appService: AppService) { }
  ngOnInit(): void {
    this.monkeySubscription = this.appService.activeMonkey$.subscribe(monkey => this.monkey = monkey);
    console.log(`the active monkey in appservice is ${this.monkey.name}`);
  }
  // ngDoCheck() {
    
  // }
  onSubmit() {
    if (this.form.valid) {
      // this.monkey.name = this.monkeyForm.name;
      // this.monkey.age = this.monkeyForm.age;
      // this.monkey.weight = this.monkeyForm.weight;
      // this.monkey.gender = this.monkeyForm.gender;
      // 
      this.appService.saveMonkey(this.monkey);
      console.log(`${this.monkey.id} and the form submits`);
      this.form.reset();
    }
    
    
  }
 
 
  ngOnDestroy(): void {
    this.monkeySubscription.unsubscribe();
  }
  
}
