import { Troop } from './troop.model';
import { Monkey } from './monkey.model';
import { Utils } from './utils.model';

export class Region {
  id: string;
  troops: Troop[] = [];
  name: string;

  constructor(name?: string) {
    this.id = Utils.randomIntFromInterval(1, 10000) + '';
    this.name = name ? name : Utils.randomIntFromInterval(1000, 10000) + '';
  }
  findTroop(name: string): Troop | undefined {
    return this.troops.find((troop) => troop.name === name);
  }
  findTroopById(id: string) {
    return this.troops.find((troop) => troop.id === id);
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
    return this.grandTotalAge() / this.getMonkeyCount();
  }
  grandAvgWeight(): number {
    return this.grandTotalWeight() / this.getMonkeyCount();
  }
  createNewTroop(name?: string): string {
    let troop: Troop;
    troop = new Troop(this.id, name);
    troop.populate();
    this.troops.push(troop);
    console.log(troop.toString());
    return troop.id;
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
      let monkeys: Monkey[] = [];
      this.troops.forEach(troop => monkeys = monkeys.concat(troop.monkeys));
      return monkeys.find(monkey => monkey.id === id);
    }

  toString(): string {
    return `${this.name} [Troops: ${
      this.troops.length
    }, Monkeys: ${this.getMonkeyCount()}]`;
  }
}
