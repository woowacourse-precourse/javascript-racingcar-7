import { Console } from '@woowacourse/mission-utils';
import { generateRandomNumber } from './utils/index.js';

class Game {
  constructor(input, count) {
    this.input = input;
    this.count = count;
    this.record = '';
    this.result = new Map();
  }

  start() {
    this.input.forEach((car) => {
      const result = generateRandomNumber();
      const isMovingForward = result >= 4;
      if (isMovingForward) {
        const score = this.result.get(car) ?? 0;
        this.result.set(car, score + 1);
      }

      this.record += `${car} : ${'-'.repeat(this.result.get(car))} \n`;
    });
    Console.print(`${this.record}\n`);
    this.record = '';
  }

  gameResult() {
    return this.result;
  }
}

export default Game;
