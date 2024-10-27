import { Random } from '@woowacourse/mission-utils';
import OutputView from '../utils/OutputView.js';

class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  start() {
    OutputView.printExecutionResult();
    for (let i = 0; i < this.tryCount; i += 1) {
      this.cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          car.move();
        }
      });
      OutputView.printCarPositions(this.cars);
    }
  }

  getCars() {
    return this.cars;
  }
}

export default Race;
