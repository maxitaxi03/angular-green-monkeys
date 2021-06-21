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
    getMonkeysCount(): number {
        let monkeyCount = 0;
        this.troops.forEach(troop => monkeyCount += troop.totalMonkeys());
        return monkeyCount;
    }
    grandTotalMutants(): number {
        let totMutants = 0;
        this.troops.forEach(troop => totMutants += troop.totalMutants());
        return totMutants;
    }
    grandTotalNormal(): number {
        let totNormals = 0;
        this.troops.forEach(troop => totNormals += troop.totalNormals());
        return totNormals;
    }
    grandTotalAge(): number {
        let totAge = 0;
        this.troops.forEach(troop => totAge += troop.totalAge());
        return totAge;
    }
    grandTotalWeight(): number {
        let totWeight = 0;
        this.troops.forEach(troop => troop.totalWeight());
        return totWeight;
    }
    grandAvgAge(): number {
        let avgAge = this.grandTotalAge() / this.getMonkeysCount();
        return avgAge;
    }
    grandAvgWeight(): number {
        let avgWeight = this.grandTotalWeight() / this.getMonkeysCount();
        return avgWeight;
    }
      createNewTroop(name?: string) {
        let troop: Troop;
        if (name) {
            troop = new Troop(name);
        } else {
            troop = new Troop();
        }
        this.troops.push(troop);
      }
}