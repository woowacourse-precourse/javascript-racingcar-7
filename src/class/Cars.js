import { Console } from '@woowacourse/mission-utils';
import { Car, MyUtils } from './index.js';

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
    Console.print('\n실행 결과');
    for (let i = 0; i < counts; i += 1) {
      this.attemptMoveAllCars();
      MyUtils.printNewline();
    }
  }
}

export default Cars;
