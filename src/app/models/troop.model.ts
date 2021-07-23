import { Monkey } from './monkey.model';
import { Utils } from './utils.model';
export class Troop {
    static maxSize = 3;
    name: string;
    id: string;
    regionId: string;
    private _monkeys: Monkey[] = [];

    constructor(regionId: string, name?: string) {
      this.regionId = regionId;
      this.name = name ? name : this.name = Utils.randomIntFromInterval(1000, 10000) + '';
      this.id = Utils.randomIntFromInterval(1, 10000) + '';
    }
    get monkeys(): Monkey[] {
      return this._monkeys;
    }
    size() : number {
        return this._monkeys.length;
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
            const baby = new Monkey(this.id, 1);
            this._monkeys.push(baby);
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
        while (!this._monkeys[num1].isAlive) {
            num1 = Utils.randomIntFromInterval(0, this.size()-1);
        }
        while (!this._monkeys[num2].isAlive) {
            num2 = Utils.randomIntFromInterval(0, this.size()-1);
        }
            return {m1: this._monkeys[num1], m2: this._monkeys[num2]};
    }
    populate(): void {
       let toAdd = Troop.maxSize - this._monkeys.length
       for (let i = 0; i < toAdd; i++) {
           this._monkeys.push(new Monkey(this.id));
       }
    }
    feedAll(): void {
        this._monkeys.forEach(monkey => monkey.eat(10));
    }
    ageAll(): void {
        this._monkeys.forEach(monkey => monkey.ageMonk());
    }
    totalAge(): number {
        //this.monkeys.forEach(monkey => monkey.age += monkey.age);
        let totalAge: number = 0;
        this._monkeys.forEach(monkey => totalAge += monkey.age);
        return totalAge;
    }
    totalWeight(): number {
        let totalWeight = 0;
        this._monkeys.forEach(monkey => totalWeight += monkey.weight);
        return totalWeight;
    }
    totalMonkeys(): number {
        return this.size();
    }
    totalMutants(): number{
        let totalMutants: number = 0;
        this._monkeys.forEach(monkey => {
           if (monkey.isMutant) {
               totalMutants++;
           }
        });
        return totalMutants;
    }
    totalNormals(): number {
        return this.totalMonkeys() - this.totalMutants();
    }
    toString(): string {
      return `${this.name} [Monkeys: ${this.totalMonkeys()},
       Average Weight: ${this.totalWeight() / this.totalWeight()},
       Average Age: ${this.totalAge() / this.totalMonkeys()}]`;
    }

}
