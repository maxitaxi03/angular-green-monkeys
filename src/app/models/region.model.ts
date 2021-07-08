import { Troop } from './troop.model';
import { Monkey } from './monkey.model';
import { Utils } from './utils.model';

export class Region {
    private _troops: Troop[] = [];
    monkeysCount: number = 0; 
    name: string;


    constructor(name?: string) {
        if (name) {
        this.name = name;
        } else {
            this.name = Utils.randomIntFromInterval(1000, 10000) + '';
        }
    }
    get troops(): Troop[] {
        return this._troops;
    }
    findTroop(name: string): Troop | undefined {
        return this._troops.find(troop => troop.name === name);
    }
    searchTroops(term: string): Troop[] {
      return this._troops.filter(troop => troop.name.startsWith(term));
    }
    searchMonkeys(term: string): Monkey[] {
        let monkeys: Monkey[] = [];
        this._troops.forEach(troop => monkeys = monkeys.concat(troop.monkeys));
        return monkeys.filter(monkey => (monkey.id + '').startsWith(term));
    }
    getMonkeyCount(): number {
      return this._troops.reduce((count, troop) => count + troop.totalMonkeys(), 0);
    }
    grandTotalMutants(): number {
        let totMutants = 0;
        this._troops.forEach(troop => totMutants += troop.totalMutants());
        return totMutants;
    }
    grandTotalNormal(): number {
        let totNormals = 0;
        this._troops.forEach(troop => totNormals += troop.totalNormals());
        return totNormals;
    }
    grandTotalAge(): number {
        let totAge = 0;
        this._troops.forEach(troop => totAge += troop.totalAge());
        return totAge;
    }
    grandTotalWeight(): number {
        let totWeight = 0;
        this._troops.forEach(troop => troop.totalWeight());
        return totWeight;
    }
    grandAvgAge(): number {
        let avgAge = this.grandTotalAge() / this.getMonkeyCount();
        return avgAge;
    }
    grandAvgWeight(): number {
        let avgWeight = this.grandTotalWeight() / this.getMonkeyCount();
        return avgWeight;
    }
    createNewTroop(name?: string) {
      let troop: Troop;
      if (name) {
          troop = new Troop(name);
      } else {
          troop = new Troop();
      }
      troop.populate();
      this._troops.push(troop);
      console.log(this.toString());
    }

  toString(): string {
    return `${this.name} [Troops: ${this._troops.length}, Monkeys: ${this.getMonkeyCount()}]`;
  }
}