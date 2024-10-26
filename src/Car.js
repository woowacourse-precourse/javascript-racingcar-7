import { Console } from '@woowacourse/mission-utils';

export default class Car {
  constructor(carName) {
    this.carName = carName;
    this.moveCount = 0;
  }

  moveCar() {
    this.moveCount++;
  }

  printCarStatus() {
    let moveProgressBar = '';
    for (let i = 0; i < this.moveCount; i += 1) {
      moveProgressBar += '-';
    }
    Console.print(`${this.carName} : ${moveProgressBar}`);
  }

  getMoveCount() {
    return this.moveCount;
  }
}