import Car from './Car.js';

export default class CarRace {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.split(',').map((carName) => new Car(carName));
  }
}
