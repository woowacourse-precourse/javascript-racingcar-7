import { RacingCar } from './Car.js';
import CarNameValidator from './validation/CarNameValidator.js';

export default class RacingCars {
  #cars;

  static create (carNames) {
    CarNameValidator.validateCarNamesDuplication(carNames);
    return new RacingCars(carNames.map((carName) => new RacingCar(carName)));
  }

  constructor (cars) {
    this.#cars = cars;
  }

  moveCars () {
    this.#cars.forEach((car) => car.moveCar());
  }

  getCarsState () {
    return this.#cars.map((car) => ({
      name: car.getCarName(),
      moveCount: car.getMoveCount(),
    }));
  }

  getCars () {
    return this.#cars;
  }
}
