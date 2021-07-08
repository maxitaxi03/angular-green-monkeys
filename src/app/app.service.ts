import { Injectable } from '@angular/core';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';
import { Monkey } from './models/monkey.model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _region!: Region;
  private _activeTroop$!: Observable<Troop>;
  private activeTroopSource = new BehaviorSubject<Troop>(new Troop());
  activeTroop$ = this.activeTroopSource.asObservable();
  
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
  changeActiveTroop(troop: Troop) {
    this.activeTroopSource.next(troop);
  }
  searchTroops(term: string): Observable<Troop[]> {
    if (!term.trim()) {
      // if not search term, return empty troop array.
      return of([]);
    }
    return of(this._region.searchTroops(term));
  }
  searchMonkeys(term: string): Observable<Monkey[]> {
    if (!term.trim()) {
      // if not search term, return empty monkey array.
      return of([]);
    }
    return of(this._region.searchMonkeys(term));
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
}
