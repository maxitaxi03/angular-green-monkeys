export class Utils {
    static randomIntFromInterval(min: number, max: number): number { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      
    static randomBoolean(): boolean {
        return Math.random() >= 0.5;
    }
    static randomName(gender: string): string {
          const male = [
              'Adam', 
              'Bill', 
              'Charles', 
              'Deon', 
              'Eric',
              'Alex',
              'Bailey',
              'Bandit',
              'Bear',
              'Beau',
              'Bill',
              'Blitz',
              'Boone',
              'Buddy',
              'Buster',                                              
            ];
          const female = [
              'Fran', 
              'Gina', 
              'Harriet', 
              'Ida', 
              'Jackie',
              'Abby',
              'Angel',
              'Annie',
              'aby',
              'inky',
              'lue',
              'oolah',
              'ootsama',
              'randy',
              'allie',
            ];
          const randNum = Utils.randomIntFromInterval(0, male.length);
          return gender === 'male' ? male[randNum] : female[randNum];
      }
  }