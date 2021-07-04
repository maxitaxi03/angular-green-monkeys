import { Injectable } from '@angular/core';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';
import { Monkey } from './models/monkey.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _region!: Region;
  private _activeTroop$!: Observable<Troop>;

  constructor() { }
  get region(): Region {
     return this._region;
  }
  get activeTroop(): Observable<Troop> {
    return this._activeTroop$;
  }
  set activeTroop(troop: Observable<Troop>) {
    this._activeTroop$ = troop;
  }
  searchTroops(term: string): Observable<Troop[]> {
    if (!term.trim()) {
      // if not search term, return empty troop array.
      return of([]);
    }
    return of(this._region.troops.filter(troop => troop.name.startsWith(term)));
  }
  searchMonkeys(term: string): Observable<Monkey[]> {
    if (!term.trim()) {
      // if not search term, return empty monkey array.
      return of([]);
    }
    return of([]);
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
  fetchOrders = async(userId: any) => {
    return `${userId}'s order data`
  }
  user$ = of({ uid: Math.random() });
  orders$ = this.user$.pipe(
    map(user => {
        return this.fetchOrders(user.uid);
    })
  );

}
