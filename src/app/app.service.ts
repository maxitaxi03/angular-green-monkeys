import { Injectable } from '@angular/core';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';
import { Monkey } from './models/monkey.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMonkey } from './components/interfaces/monkey.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _region!: Region;
  private _activeTroop$!: Observable<Troop>;
  private _activeMonkey$!: Observable<Monkey>;
  
  /***************************BEHAVIORSUBJECT*******************************/ 
  private activeMonkeySource = new BehaviorSubject(new Monkey());
  activeMonkey$ = this.activeMonkeySource.asObservable();
  /***************************BEHAVIORSUBJECT*******************************/

  constructor() {}
  get region(): Region {
    return this._region;
  }
  get activeTroop(): Observable<Troop> {
    return this._activeTroop$;
  }
  set activeTroop(troop: Observable<Troop>) {
    this._activeTroop$ = troop;
  }
  get activeMonkey(): Observable<Monkey> {
    return this._activeMonkey$;
  }
  set activeMonkey(monkey: Observable<Monkey>) {
    this._activeMonkey$ = monkey;
  }
 /***************************BEHAVIORSUBJECT*******************************/ 
  activeMonkeyB(monkey: Monkey) {
    this.activeMonkeySource.next(monkey);
  }
 /***************************BEHAVIORSUBJECT*******************************/
  
  searchTroops(term: string): Observable<Troop[]> {
    if (!term.trim()) {
      // if not search term, return empty troop array.
      return of([]);
    }
    return of(
      this._region.troops.filter((troop) => troop.name.startsWith(term))
    );
  }
  searchMonkeys(term: string): Observable<Monkey[]> {
    if (!term.trim()) {
      // if not search term, return empty monkey array.
      return of([]);
    }
    return of(
      this._region.searchMonkeys(term),
    );
  }
  createRegion(name: string): void {
    this._region = new Region(name);
  }
  addNewTroopToRegion(name: string): void {
    this._region.createNewTroop(name);
  }
  findTroop(name: string): Troop | undefined {
    return this._region.findTroop(name);
  }
  
  saveMonkey(data: IMonkey): number {
    let foundID = this._region.troops.find((troop) => troop.id);
    if (!data.monkeyId) {
      let monkey = new Monkey();
      this._region.troops.filter((troop) => troop.monkeys.push(monkey))
      return monkey.id;
    }
    else return -1;
  }



  // fetchOrders = async (userId: any) => {
  //   return `${userId}'s order data`;
  // };
  // user$ = of({ uid: Math.random() });
  // orders$ = this.user$.pipe(
  //   map((user) => {
  //     return this.fetchOrders(user.uid);
  //   })
  // );
}
