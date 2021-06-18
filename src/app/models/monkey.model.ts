import { Utils } from './utils.model';

export class Monkey {
    static minWeight: number;
    static maxWeight: number;
    static minAge: number = 1; // measured in days
    static maxAge: number; // measured in days

    name: string;
    imageUrl: string = "https://www.placemonkeys.com/500/350?random";
    age: number;
    weight: number;
    injuries: number = 0;
    isMutant: boolean = false;
    isAlive: boolean = true;
    gender: string;


    constructor(age?: number) {
        this.gender = Utils.randomBoolean() ? 'male' : 'female';
        this.name = Utils.randomName(this.gender);
        this.age = Utils.randomIntFromInterval(Monkey.minAge, Monkey.maxAge);
        this.weight = Utils.randomIntFromInterval(Monkey.minWeight, Monkey.maxWeight);
    }
    vitalStats() {
        return {isAlive: this.isAlive, isMutant: this.isMutant}
    }
    eat(amount: number) {
        this.weight = this.weight * (amount / 100);
        
    }
    ageMonk(): void {
       let mutChance = Utils.randomIntFromInterval(0.02, 1);
       this.age++;

       if (mutChance <= 0.02)
        this.isMutant = true;
    }
    injure() {
        this.injuries++;
        if (this.injuries > 3) {
            this.isAlive = false;
        }
        return this.isAlive;
    }


}
