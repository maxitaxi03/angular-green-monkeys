import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Region } from './models/region.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  region!: Region;

  constructor(private appService: AppService) {
    this.appService.createRegion('Barbados');
    
  }
  ngOnInit() {  }

}
