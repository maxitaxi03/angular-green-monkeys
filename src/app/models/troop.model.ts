import { Monkey } from './monkey.model';
import { Utils } from './utils.model';
export class Troop {
    static maxSize = 3;
    name: string;
    id: number;
    monkeys: Monkey[] = [];

    constructor(name?: string) {
        if (name) {
            this.name = name;
            } else {
                this.name = Utils.randomIntFromInterval(1000, 10000) + '';
            }
            this.id = Utils.randomIntFromInterval(1, 10000);
            console.log(this.monkeys);
            console.log(`Total age of troop ${this.totalAge()}`);
            console.log(`Total weight of troop ${this.totalWeight()}`);
            console.log(`Total number of monkeys in troop ${this.totalMonkeys()}`);
            console.log(`Size of the monkey array: ${this.size()}`)
    }
    size() : number {
        let size = this.monkeys.length;
        return size;
    }
    engage(): string {
        let result = '';
        const monkeyPair = this.chooseLiveMonkeyPairRandomly();
        let randNum = Utils.randomIntFromInterval(1, 100);
        let fightRate = (monkeyPair.m1.weight / monkeyPair.m2.weight) * 50;
        if (monkeyPair.m1.gender === monkeyPair.m2.gender) {
                (randNum > fightRate) ? monkeyPair.m1.injure() : monkeyPair.m2.injure();
                result = `${monkeyPair.m1.name} and ${monkeyPair.m2.name} fought.`;
        
        } else {
            const baby = new Monkey(1);
            this.monkeys.push(baby);
            result = `${monkeyPair.m1.name} and ${monkeyPair.m2.name} have made baby ${baby.name}.`;
        }
        return result;
    }
    private chooseLiveMonkeyPairRandomly(): {m1: Monkey, m2: Monkey} {
        let num1 = Utils.randomIntFromInterval(0, this.size()-1);
        let num2 = Utils.randomIntFromInterval(0, this.size()-1);
        while(num1 === num2) {
            num2 = Utils.randomIntFromInterval(0, this.size()-1);
        }
        // Todo return only live monkeys
        // while (this.monkeys[num1].isAlive && this.monkeys[num2].isAlive)
        while (!this.monkeys[num1].isAlive) {
            num1 = Utils.randomIntFromInterval(0, this.size()-1);
        }
        while (!this.monkeys[num2].isAlive) {
            num2 = Utils.randomIntFromInterval(0, this.size()-1);
        }
            return {m1: this.monkeys[num1], m2: this.monkeys[num2]};
         
            
    }
    populate(): void {
       let toAdd = Troop.maxSize - this.monkeys.length
       for (let i = 0; i < toAdd; i++) {
           this.monkeys.push(new Monkey(undefined, this.name));
       }
        
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
        let totnormals = 0;
        return this.totalMonkeys() - this.totalMutants()
        
    }
    
    findMonkey(id: string) {
        return this.monkeys.filter((monkey) => monkey.id.startsWith(id));
        
    }
}