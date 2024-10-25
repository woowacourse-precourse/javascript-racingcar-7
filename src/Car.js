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
}

export default Car;
