import { Injectable } from '@angular/core';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';
import { Monkey } from './models/monkey.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { IMonkey } from './interfaces/monkey.interface';

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
  get troopList(): Observable<{id: string, name: string, regionId: string}[]> {
    return of(
      this._region.troops.map(({ id, name, regionId }) => ({id, name, regionId})) // Object destructuring
    );
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
  addNewTroopToRegion(name?: string): void {
    this._region.createNewTroop(name);
  }
  findTroopByName(name: string): Troop | undefined {
    return this._region.findTroop(name);
  }
  findTroopById(id: string): Troop | undefined {
    return this._region.findTroopById(id);
  }
  findMonkeyById(id: string): Monkey | undefined {
    return this._region.findMonkeyById(id);
  }
  saveMonkey(data: IMonkey): string {
    let monkeyId = '-1';
    const troop = this._region.findTroopById(data.troopId);
    if (!troop) {
      return monkeyId; // Can't add monkey to an invalid troop;
    }
    if (!data.id) { // We are creating a new monkey
      let monkey = Monkey.fromIMonkey(data);
      troop.monkeys.push(monkey);
      monkeyId = monkey.id;
    } else {
      const monkey = this._region.findMonkeyById(data.id);
      if (monkey) {
        monkey.name = data.name;
        monkey.age = data.age;
        monkey.gender = data.gender;
        monkey.weight = data.weight;
        monkey.isMutant = data.isMutant;
        // The rest of the app might want to know that a monkey changed troop
        if (monkey.troopId !== data.troopId) {
          monkey.troopId = data.troopId;
        }
      }
    }
    return monkeyId;
  }
}
