import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;
  #forwardCount;

  constructor(name) {
    this.#name = name;
    this.#forwardCount = 0;
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  moveForward(randomNumber) {
    if (randomNumber < 4) return;

    this.#forwardCount += 1;
  }

  get name() {
    return this.#name;
  }

  get forwardCount() {
    return this.#forwardCount;
  }
}

export default Car;
