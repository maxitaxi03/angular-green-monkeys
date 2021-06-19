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
    numOfMutants: number = 0;
    numOfNormals: number = 0;


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

       if (mutChance <= 0.02) {
        this.isMutant = true;
        this.numOfMutants++;
     }
        else {
            this.numOfNormals++;
     }
    }
    injure() {
        this.injuries++;
        if (this.injuries > 3) {
            this.isAlive = false;
        }
        return this.isAlive;
    }/*
    totAge(): number {
        let totAge: number = 0;
        totAge += this.age;
        return totAge;
    }
    totWeight(): number {
        let totWeight: number = 0;
        totWeight += this.weight;
        return totWeight;
    }
    totMutants(): number {
        let totMutants: number = 0;
        totMutants += this.numOfMutants;
        return totMutants;
    }
    totNormals(): number {
        let totNormals: number = 0;
        totNormals += this.numOfNormals;
        return totNormals;
        
    } */

}
