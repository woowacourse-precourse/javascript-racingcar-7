import { Car, UserInterface } from './index.js';
import { SCRIPT } from '../constants/interfaceScript.js';

class Cars {
  constructor(names) {
    this.cars = names.map((name) => new Car(name));
  }

  race(counts) {
    UserInterface.print(SCRIPT.EXECUTION_RESULT);
    for (let i = 0; i < counts; i += 1) {
      this.attemptMoveAllCars();
      UserInterface.printNewline();
    }
  }

  attemptMoveAllCars() {
    this.cars.forEach((car) => car.attemptMove());
  }

  getScores() {
    return this.cars.map((car) => car.score);
  }

  getNamesByScore(number) {
    return this.cars.filter((car) => car.score === number).map((car) => car.name);
  }
}

export default Cars;
