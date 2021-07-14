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
  selector: 'app-monkey-edit',
  templateUrl: './monkey-edit.component.html',
  styleUrls: ['./monkey-edit.component.css']
})
export class MonkeyEditComponent implements OnInit {
  @Input('monkey')monkey!: Monkey;
  monkeyForm!: FormGroup;
  name!: FormControl;
  age!: FormControl;
  weight!: FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
