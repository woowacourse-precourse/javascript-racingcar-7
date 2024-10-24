import { Console, Random } from '@woowacourse/mission-utils';
import { initRecord } from './utils/initRecord.js';

export class Game {
  constructor(cars, count) {
    this.record = initRecord(cars);
    this.count = count;
  }
  update(movingCars) {
    movingCars.map((car) => {
      this.record[car] += 1;
    });
  }
  play() {
    Console.print('\n실행 결과');
    for (let i = 0; i < this.count; i++) {
      this.move();
    }
  }
  move() {
    const movingCars = [];
    Object.keys(this.record).map((key) => {
      Random.pickNumberInRange(0, 9) >= 4 && movingCars.push(key);
    });
    this.update(movingCars);
    this.print();
  }

  print() {
    Object.entries(this.record).map(([car, movingLength]) => {
      Console.print(car + ' : ' + '-'.repeat(movingLength));
    });
    Console.print('\n');
  }
}
