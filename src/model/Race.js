//@ts-check

import random from '../util/random.js';
import outputView from '../view/outputView.js';
import Car from './Car.js';

class Race {
  /**@param {Car[]} cars  */
  constructor(cars) {
    this.cars = cars;
  }

  /**@param {number} attempts  */
  race(attempts) {
    if (attempts <= 0) return;

    const cars = this.getCars();

    this.moveForward();
    outputView.printRaceStatus(cars);

    this.race(attempts - 1);
  }

  moveForward() {
    this.cars.forEach((car) => car.move(random.generateNumber()));
  }

  determineWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars.filter((car) => car.position === maxPosition);
  }

  getCars() {
    return this.cars;
  }
}

export default Race;
