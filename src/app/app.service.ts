import { Injectable } from '@angular/core';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _region!: Region;
  private _activeTroop!: Troop;

  constructor() { }
  get region(): Region {
     return this._region;
     
  }
  get newRegion(): Observable<Region> {
    return of(this._region);
  }
  get activeTroop(): Troop {
    return this._activeTroop;
  }
  get newActiveTroop(): Observable<Troop> {
    return of(this._activeTroop);
  }
  set activeTroop(troop: Troop) {
    this._activeTroop = troop;
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
//    fetchOrders = async(userId: any) => {
//     return `${userId}'s order data`
// }

// user$ = of({ uid: Math.random() });

//  orders$ = this.user$.pipe(
//     map(user => {
//         return this.fetchOrders(user.uid);
//     })
// )



}
