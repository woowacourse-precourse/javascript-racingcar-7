import { Console, Random } from '@woowacourse/mission-utils';
import {
  MOVE_PROBABILITY_THRESHOLD,
  RANDOM_RANGE,
} from '../constants/gameRules.js';

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  printStatus() {
    Console.print(`${this.#name} : ${'-'.repeat(this.#distance)}`);
  }

  tryMove() {
    if (this.#isMovePossible()) {
      this.#distance += 1;
    }
  }

  #isMovePossible() {
    return (
      Random.pickNumberInRange(RANDOM_RANGE.MIN, RANDOM_RANGE.MAX) >=
      MOVE_PROBABILITY_THRESHOLD
    );
  }
}

export default Car;
