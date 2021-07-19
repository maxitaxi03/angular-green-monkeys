import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { monkeyForm } from 'src/app/models/monkey-form.model';
import { IMonkey } from '../interfaces/monkey.interface';

@Component({
  selector: 'app-monkey-form',
  templateUrl: './monkey-form.component.html',
  styleUrls: ['./monkey-form.component.css'],
})
export class MonkeyFormComponent implements OnInit {
  /*
  @Input('monkey')monkey?: Monkey;
  monkeyForm?: FormGroup;
  name!: FormControl;
  age!: FormControl;
  weight!: FormControl;
  constructor() { }

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
  ngOnInit(): void {}
  monkeyForm: monkeyForm = new monkeyForm();
  @Input('monkey')monkey!: IMonkey;
  @ViewChild('f') form: any;

  onSubmit() {
    if (this.form.valid) {
      this.monkey.name = this.monkeyForm.name;
      this.monkey.age = this.monkeyForm.age;
      this.monkey.weight = this.monkeyForm.weight;
      this.monkey.gender = this.monkeyForm.gender;
      console.log("form submitted");
      this.form.reset();

    }
    
  }
  
}
