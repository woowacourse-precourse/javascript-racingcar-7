import { Random } from '@woowacourse/mission-utils';
import { VALUES } from './constants/values.js';

class Car {
  static #instances = [];

  #state;

  constructor(name) {
    this.#state = {
      name,
      progress: 0,
    };
  }

  #move() {
    const value = Random.pickNumberInRange(VALUES.minRandom, VALUES.maxRandom);
    if (value >= VALUES.moveIfOrMore) this.#state.progress += 1;
  }

  static executeAllCars() {
    return Car.#instances.map((car) => {
      car.#move();
      return car.#getState();
    });
  }

  #getState() {
    return this.#state;
  }
}

export default Car;
