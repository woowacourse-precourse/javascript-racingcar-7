import { Random } from '@woowacourse/mission-utils';
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
    for (let i = 0; i < this.count; i++) {
      let movingCars = [];
      Object.keys(this.record).map((key) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          movingCars.push(key);
        }
      });
      this.update(movingCars);
    }
  }
}
