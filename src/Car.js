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
    Car.#instances.push(this);
  }

  static getWinner() {
    const carStates = Car.#instances.map((car) => car.#getState());
    const highestScore = Math.max(...carStates.map((car) => car.progress));
    const winners = carStates.filter((car) => car.progress === highestScore).map((car) => car.name);
    return winners;
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
