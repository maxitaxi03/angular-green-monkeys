import { Component, OnInit, Input, ViewChild, OnDestroy, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { monkeyForm } from 'src/app/models/monkey-form.model';
import { IMonkey } from '../interfaces/monkey.interface';
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-monkey-form',
  templateUrl: './monkey-form.component.html',
  styleUrls: ['./monkey-form.component.css'],
})
export class MonkeyFormComponent implements OnInit, DoCheck, OnDestroy  {
  /*
  @Input('monkey')monkey?: Monkey;
  monkeyForm?: FormGroup;
  name!: FormControl;
  age!: FormControl;
  weight!: FormControl;
  

  ngOnInit(): void {
    this.createForm();
    this.createFormControls();
  }
  createFormControls() {
    this.name = new FormControl("", Validators.required);
    this.age = new FormControl("", Validators.required);
    this.weight = new FormControl("", Validators.required);
  }
  createForm() {
    this.monkeyForm = new FormGroup({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }
  submit() {
    if (this.monkeyForm?.valid) {
      console.log(this.monkeyForm.value);
      this.monkeyForm.reset();
    }
  } */
  ngOnInit(): void {
    this.monkeySubscription = this.appService.activeMonkey$.subscribe(monkey => this.monkey = monkey);
    console.log(`the active monkey in appservice is ${this.monkey.name}`);
  }
  monkeyForm: monkeyForm = new monkeyForm();
  @Input('monkey')monkey!: IMonkey;
  activeMonkey!: IMonkey;
  @ViewChild('f') form: any;
  monkeySubscription!: Subscription;
  


  constructor(private appService: AppService) { }

  ngDoCheck() {
    
  }
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
