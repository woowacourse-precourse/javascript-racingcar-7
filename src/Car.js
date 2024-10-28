import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  get name() {
    return this.#name;
  }
}

export default Car;
