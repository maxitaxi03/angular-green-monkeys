import { Component, Input } from '@angular/core';
import { Monkey } from 'src/app/models/monkey.model';

@Component({
  selector: 'monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.css']
})
export class MonkeyComponent {
  @Input('monkey') monkey?: Monkey;
  constructor() { }
}
