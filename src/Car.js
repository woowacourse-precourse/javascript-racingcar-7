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

  static addCarInstances(carNames) {
    this.#instances = [...this.#instances, ...carNames.map((carName) => new Car(carName))];
  }

  static clearInstances() {
    Car.#instances = [];
  }

  static getWinner() {
    const carStates = Car.#instances.map((car) => car.#getState());
    const highestScore = Math.max(...carStates.map((car) => car.progress));
    const winners = carStates.filter((car) => car.progress === highestScore).map((car) => car.name);
    return winners;
  }

  static executeAllCars() {
    return Car.#instances.map((car) => {
      car.#move();
      return car.#getState();
    });
  }

  #move() {
    const value = Random.pickNumberInRange(VALUES.minRandom, VALUES.maxRandom);
    if (value >= VALUES.moveIfOrMore) this.#state.progress += 1;
  }

  #getState() {
    return this.#state;
  }
}

export default Car;
