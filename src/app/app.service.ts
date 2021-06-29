import { Injectable } from '@angular/core';
import { Region } from './models/region.model';
import { Troop } from './models/troop.model';

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
  get activeTroop(): Troop {
    return this._activeTroop;
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
  
}
