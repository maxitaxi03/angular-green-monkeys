import { Utils } from './utils.model';
import {IMonkey} from '../interfaces/monkey.interface';

export class Monkey {
    static minWeight: number = 1.50;
    static maxWeight: number = 20;
    static minAge: number = 1; // measured in days
    static maxAge: number = 100; // measured in days

    id: string;
    name: string;
    imageUrl: string = "https://www.placemonkeys.com/500/350?random";
    age: number = 0;
    weight: number;
    injuries: number = 0;
    isMutant: boolean = false;
    isAlive: boolean = true;
    gender: 'male' | 'female';
    numOfMutants: number = 0;
    numOfNormals: number = 0;
    troopId: string = '';


    constructor(troopId?: string, age?: number, data?: IMonkey) {
      this.id = Utils.randomIntFromInterval(1, 10000) + '';
      if (data) {
        this.gender = data.gender;
        this.name = data.name;
        this.age = data.age;
        this.troopId = data.troopId;
        this.weight = data.weight;
        this.isAlive = data.isAlive ? data.isAlive : false;
      } else {
        this.gender = Utils.randomBoolean() ? 'male' : 'female';
        this.name = Utils.randomName(this.gender);
        this.age = age? age : Utils.getRandomInt(Monkey.minAge, Monkey.maxAge);
        if (troopId) {
          this.troopId = troopId;
        }
        this.weight = Utils.randomIntFromInterval(Monkey.minWeight, Monkey.maxWeight);
        this.isAlive = true;
      }
    }
  static fromIMonkey(data: IMonkey): Monkey {
    return new Monkey(undefined, undefined, data);
  }

    vitalStats() {
        return {isAlive: this.isAlive, isMutant: this.isMutant}
    }
    eat(amount: number) {
        this.weight += this.weight * (amount / 100);
    }
    ageMonk(): number {
       let mutChance = Utils.randomIntFromInterval(0.02, 1);
       this.age++;

       if (mutChance <= 0.02) {
        this.isMutant = true;
        //this.numOfMutants++;
     }
     return this.age;

    }
    injure() {
        this.injuries++;
        if (this.injuries > 3) {
            this.isAlive = false;
        }
        return this.isAlive;
    }
    

}
