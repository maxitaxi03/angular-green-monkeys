export interface IMonkey {
    id?: string,
    troopId: string,
    name: string,
    age: number,
    weight: number,
    gender: 'male' | 'female',
    isAlive: boolean;
    isMutant: boolean;
}
