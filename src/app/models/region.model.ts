import { Troop } from './troop.model';
import { Monkey } from './monkey.model';
import { Utils } from './utils.model';

export class Region {
  troops: Troop[] = [];
  monkeysCount: number = 0;
  name: string;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    } else {
      this.name = Utils.randomIntFromInterval(1000, 10000) + '';
    }
  }
  findTroop(name: string): Troop | undefined {
    return this.troops.find((troop) => troop.name === name);
  }
  getMonkeyCount(): number {
    return this.troops.reduce(
      (count, troop) => count + troop.totalMonkeys(),
      0
    );
  }
  grandTotalMutants(): number {
    let totMutants = 0;
    this.troops.forEach((troop) => (totMutants += troop.totalMutants()));
    return totMutants;
  }
  grandTotalNormal(): number {
    let totNormals = 0;
    this.troops.forEach((troop) => (totNormals += troop.totalNormals()));
    return totNormals;
  }
  grandTotalAge(): number {
    let totAge = 0;
    this.troops.forEach((troop) => (totAge += troop.totalAge()));
    return totAge;
  }
  grandTotalWeight(): number {
    let totWeight = 0;
    this.troops.forEach((troop) => troop.totalWeight());
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
    this.troops.push(troop);
    console.log(this.toString());
  }
  searchMonkeys(term: string): Monkey[] {
    let monkeys: Monkey[] = [];
    this.troops.forEach(troop => monkeys = monkeys.concat(troop.monkeys)); // concat operator returns a new array
    return monkeys.filter(monkey => (monkey.id + '').startsWith(term)); // id is numeric, convert to string first
    }
    // searchTroops(term: string) {
    //   let region: Region[] = [];
    //   region.forEach(region => this.troops = this.troops.concat(region.troops));
    //   return this.troops.filter((troop) => troop.name.startsWith(term))
    // }

    findMonkeyById(id: string) {
      return this.troops.find((troop) => troop.findMonkey(id));
    }
    findTroopById(id: number) {
      return this.troops.find((troop) => troop.id === id);
    }
  toString(): string {
    return `${this.name} [Troops: ${
      this.troops.length
    }, Monkeys: ${this.getMonkeyCount()}]`;
  }
}
