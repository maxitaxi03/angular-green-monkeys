import { Component, OnInit, Input } from '@angular/core';
import { Monkey } from 'src/app/models/monkey.model';

@Component({
  selector: 'monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.css']
})
export class MonkeyComponent implements OnInit {
  @Input('monkey') monkey?: Monkey;
  constructor() { }

  ngOnInit(): void {
  }

 


}
