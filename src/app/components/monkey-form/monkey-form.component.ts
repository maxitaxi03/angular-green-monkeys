import { Component, OnInit, Input } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Form
} from "@angular/forms";
import { Monkey } from 'src/app/models/monkey.model';

@Component({
  selector: 'app-monkey-form',
  templateUrl: './monkey-form.component.html',
  styleUrls: ['./monkey-form.component.css']
})
export class MonkeyFormComponent implements OnInit {
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
  }
}
