import { Console } from '@woowacourse/mission-utils';
import { Car, Interface } from './index.js';
import { SCRIPT } from '../constants/interfaceScript.js';

class Cars {
  constructor(names) {
    this.cars = names.map((name) => new Car(name));
  }

  getScores() {
    return this.cars.map((car) => car.score);
  }

  getNamesByScore(number) {
    return this.cars.filter((car) => car.score === number).map((car) => car.name);
  }

  attemptMoveAllCars() {
    this.cars.forEach((car) => car.attemptMove());
  }

  race(counts) {
    Console.print(SCRIPT.EXECUTION_RESULT);
    for (let i = 0; i < counts; i += 1) {
      this.attemptMoveAllCars();
      Interface.printNewline();
    }
  }
}

export default Cars;
