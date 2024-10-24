import { Console, Random } from '@woowacourse/mission-utils';
import { GAME, CRITERIA_NUMBER } from './constants/index.js';

export class Game {
  constructor(record, count) {
    this.record = record;
    this.count = count;
  }

  play() {
    Console.print(GAME.START_MESSAGE);
    for (let i = 0; i < this.count; i++) {
      const movedCars = this.getMovedCars();
      this.record.update(movedCars);
      this.print();
    }
  }

  getMovedCars() {
    const movedCars = [];
    Object.keys(this.record.table).forEach((key) => {
      if (Random.pickNumberInRange(0, 9) >= CRITERIA_NUMBER) {
        movedCars.push(key);
      }
    });
    return movedCars;
  }

  print() {
    Object.entries(this.record.table).forEach(([car, routeLength]) => {
      Console.print(car + GAME.SAPCE_COLON + GAME.ROUTE.repeat(routeLength));
    });
    Console.print(GAME.NEW_LINE);
  }

  getWinner() {
    const maxValue = Math.max(...Object.values(this.record.table));
    return Object.keys(this.record.table).filter(
      (car) => this.record.table[car] === maxValue,
    );
  }
}
