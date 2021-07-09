import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Troop } from 'src/app/models/troop.model';
import { AppService } from '../../app.service';
import { Monkey } from '../../models/monkey.model';

@Component({
  selector: 'app-monkey-search',
  templateUrl: './monkey-search.component.html',
  styleUrls: ['./monkey-search.component.css'],
})
export class MonkeySearchComponent implements OnInit {
  monkeys$!: Observable<Monkey[]>;
  troop$?: Observable<Troop>;
  selectedMonkey?: Monkey;
  private searchTerms = new Subject<string>();

  constructor(private appService: AppService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }
  onMonkeySelect(id: number): void {
    this.troop$?.subscribe(
      (troop: Troop) => {
        let monkey = troop.monkeys.find(monkey => monkey.id === id);
        if (monkey) {
          this.selectedMonkey = monkey;
        }
      }); 
  }
  onMonkeySelected(monkey: Monkey): void {
    console.log(`Monkey selected is: ${monkey.name}`);
    //this.appService.activeMonkey = of<Monkey>(monkey);
    this.appService.activeMonkeyB(monkey);
    this.searchTerms.next('');
    // Todo set as activeTroop on AppService
  }

  
  ngOnInit(): void {
    this.monkeys$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.appService.searchMonkeys(term)),
    );
    
  }
  
}
