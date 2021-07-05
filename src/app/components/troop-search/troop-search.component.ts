import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { AppService } from '../../app.service';
import { Troop } from '../../models/troop.model';

@Component({
  selector: 'app-troop-search',
  templateUrl: './troop-search.component.html',
  styleUrls: ['./troop-search.component.css']
})
export class TroopSearchComponent implements OnInit {
  troops$!: Observable<Troop[]>;
  private searchTerms = new Subject<string>();

  constructor(private appService: AppService) { }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.troops$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      
      // Todo Only search if 3 characters are entered
      
      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.appService.searchTroops(term)),
    );
  }
  
  onTroopSelected(troop: Troop): void {
    console.log(troop.name);
    // Todo set as activeTroop on AppService
  }


}
