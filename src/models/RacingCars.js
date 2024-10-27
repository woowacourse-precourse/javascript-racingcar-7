import Car from './Car.js';
import getMoveForward from '../utils/MoveCondition.js';

class RacingCars {
  #cars;

  constructor(carNameList) {
    this.#cars = carNameList.map(name => new Car(name));
  }

  moveCarsInRound() {
    this.#cars.forEach(car => {
      if (getMoveForward()) {
        car.moveForward();
      }
    });
  }

  getCars() {
    return this.#cars;
  }
}

export default RacingCars;
