import { Random } from '@woowacourse/mission-utils';

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
    this.ensureSecondInRange(second);

    const isMovingForward = Car.canMoveForward();
    this.#positionHistory.push(
      this.#positionHistory[second - 1] + Number(isMovingForward)
    );
  }

  ensureSecondInRange(second) {
    if (second <= 0 || second > this.#positionHistory.length) {
      throw new Error(ERROR_DETAILS.INVALID_SECOND);
    }
  }

  getStateAtSecond(second) {
    this.ensureSecondInRange(second);
    return `${this.#name} : ${'-'.repeat(this.#positionHistory[second])}`;
  }

  getPositionAtSecond(second) {
    this.ensureSecondInRange(second);
    return this.#positionHistory[second];
  }
}

export default Car;
