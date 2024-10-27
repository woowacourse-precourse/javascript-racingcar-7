import { Random } from '@woowacourse/mission-utils';
import { ERROR_DETAILS } from './constants.js';

class Car {
  #name;
  #positionHistory;

  constructor(name) {
    this.#name = name;
    this.#positionHistory = [0];
  }

  static canMoveForward() {
    const betweenZeroNine = Random.pickNumberInRange(0, 9);
    return betweenZeroNine >= 4;
  }

  getName() {
    return this.#name;
  }

  runAt(second) {
    this.ensureInRange(second);

    const isMovingForward = Car.canMoveForward();
    this.#positionHistory.push(
      this.#positionHistory[second - 1] + Number(isMovingForward)
    );
  }

  ensureInRange(second) {
    if (second <= 0 || second > this.#positionHistory.length) {
      throw new Error(ERROR_DETAILS.INVALID_SECOND);
    }
  }

  getStateAt(second) {
    this.ensureInRange(second);
    return `${this.#name} : ${'-'.repeat(this.#positionHistory[second])}`;
  }

  getPositionAt(second) {
    this.ensureInRange(second);
    return this.#positionHistory[second];
  }
}

export default Car;
