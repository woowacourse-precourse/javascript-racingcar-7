import { Console, Random } from '@woowacourse/mission-utils';
import { initRecord } from './utils/initRecord.js';
import { GAME, CRITERIA_NUMBER } from './constants/index.js';

export class Game {
  constructor(cars, count) {
    this.record = initRecord(cars);
    this.count = count;
  }

  update(movedCars) {
    movedCars.forEach((car) => {
      this.record[car] += 1;
    });
  }

  play() {
    Console.print(GAME.START_MESSAGE);
    for (let i = 0; i < this.count; i++) {
      const movedCars = this.getMovedCars();
      this.update(movedCars);
      this.print();
    }
  }

  getMovedCars() {
    const movedCars = [];
    Object.keys(this.record).forEach((key) => {
      if (Random.pickNumberInRange(0, 9) >= CRITERIA_NUMBER) {
        movedCars.push(key);
      }
    });
    return movedCars;
  }

  print() {
    Object.entries(this.record).forEach(([car, routeLength]) => {
      Console.print(car + GAME.SAPCE_COLON + GAME.ROUTE.repeat(routeLength));
    });
    Console.print(GAME.NEW_LINE);
  }

  getWinner() {
    const maxValue = Math.max(...Object.values(this.record));
    return Object.keys(this.record).filter(
      (car) => this.record[car] === maxValue,
    );
  }
}
