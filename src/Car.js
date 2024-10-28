import { Random } from '@woowacourse/mission-utils';
import { VALUES } from './constants/values.js';

class Car {
  #state;

  constructor(name) {
    this.#state = {
      name,
      progress: 0,
    };
  }

  move() {
    const value = Random.pickNumberInRange(VALUES.minRandom, VALUES.maxRandom);
    if (value >= VALUES.moveIfOrMore) this.#state.progress += 1;
  }

  getState() {
    return this.#state;
  }
}

export default Car;
