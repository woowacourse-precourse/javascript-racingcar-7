import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;
  #positionHistory;

  constructor(name) {
    this.#name = name;
    this.#positionHistory = [];
  }

  static canMoveForward() {
    const betweenZeroNine = Random.pickNumberInRange(0, 9);
    return betweenZeroNine >= 4;
  }

  runForSeconds(seconds) {
    this.#positionHistory = Array(seconds + 1);
    this.#positionHistory[0] = 0;

    for (let index = 1; index <= seconds; ++index) {
      const hasMoved = Car.canMoveForward();
      this.#positionHistory[index] = this.#positionHistory[index - 1] + Number(hasMoved);
    }
  }

  ensureSecondInRange(second) {
    if (second < 0 || second > this.#positionHistory.length) {
      throw new Error(ERROR_DETAILS.INVALID_SECOND);
    }
  }

  getStateAtSecond(second) {
    this.ensureSecondInRange(second);
    return `${this.#name} : ${'-'.repeat(this.#positionHistory[second])}`;
  }
}

export default Car;
