import { Monkey } from './monkey.model';
import { Utils } from './utils.model';
export class Troop {
    static maxSize = 20;
    name: string;
    monkeys: Monkey[] = [];

    constructor(name?: string) {
        if (name) {
            this.name = name;
            } else {
                this.name = Utils.randomIntFromInterval(1000, 10000) + '';
            }
            console.log(this.monkeys);
    }
    size() : number {
        let size = this.monkeys.length;
        return size;
    }
    engage(): void {
        let num1 = Utils.randomIntFromInterval(0,this.size());
        let num2 = Utils.randomIntFromInterval(0,this.size());

        if (num1 === num2) {
            let num2 = Utils.randomIntFromInterval(0,this.size());
        }
        let randNUm = Utils.randomIntFromInterval(1, 100);
        let fightRate = (this.monkeys[num1].weight / this.monkeys[num2].weight) * 50;
        if (this.monkeys[num1].gender == this.monkeys[num2].gender) {
            if (this.monkeys[num1].isAlive && this.monkeys[num2].isAlive){
                (randNUm > fightRate) ? this.monkeys[num1].injure() : this.monkeys[num2].injure();
            }
            else {    
                if(!this.monkeys[num1].isAlive)
                    this.monkeys.splice(num1);
                if (!this.monkeys[num2].isAlive)
                    this.monkeys.splice(num1);
            }
        }
        else {
            this.monkeys.push(new Monkey());
        }
    }
    populate(): void {
       while (this.size() <= Troop.maxSize) {
          let toAdd = Troop.maxSize - this.monkeys.length;
            for (let i = 0; i < 5; i++) {
                this.monkeys.unshift(new Monkey());
            }
        }
        console.log(this.monkeys.length);
    }
    feedAll(): void {
        this.monkeys.forEach(monkey => monkey.eat(10));
    }
    ageAll(): void {
        this.monkeys.forEach(monkey => monkey.ageMonk());
    }
    totalAge(): number {
        //this.monkeys.forEach(monkey => monkey.age += monkey.age);
        let totalage: number = 0;
        this.monkeys.forEach(monkey => totalage += monkey.age);
        return totalage;
    }
    totalWeight(): number {
        let totalweight: number = 0;
        this.monkeys.forEach(monkey => totalweight += monkey.weight);
        return totalweight;
    }
    totalMonkeys(): number {
        return this.size();
    }
    totalMutants(): number{
        let totalmutants: number = 0;
        this.monkeys.forEach(monkey => {
           if (monkey.isMutant == true) {
               totalmutants++;
           } 
        });
        return totalmutants;
    }
    totalNormals(): number {
        let totalnormals: number = 0;
        this.monkeys.forEach(monkey => this.totalMonkeys() - this.totalMutants());
        return totalnormals;
        
    }
}