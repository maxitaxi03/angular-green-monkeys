export class monkeyForm {
    name: string;
    age: number;
    weight: number;
    gender: 'male' | 'female';
    troopId: string; // There can be no monkey without a troop
    isMutant: boolean;
    constructor() {
        this.name = '';
        this.age = 0;
        this.weight = 0;
        this.gender = 'male';
        this.troopId = '';
        this.isMutant = false;
    }
}
