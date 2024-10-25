import { printCarsMoving, printNewLine } from '../utils/ioModule.js';
import {
  getMovePosition,
  getMaxMoveCount,
  filterWinningCars,
  getCarNames,
} from './racingGameUtils.js';

class RacingGame {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  play() {
    for (let i = 0; i < this.tryCount; i += 1) {
      this.cars.forEach((car) => car.move());
      this.printCurrentState();
    }
  }

  printCurrentState() {
    this.cars.forEach((car) => {
      const movePosition = getMovePosition(car);
      printCarsMoving(car.getName(), movePosition);
    });
    printNewLine();
  }

  getWinnerNames() {
    const maxMoveCount = getMaxMoveCount(this.cars);
    const winningCars = filterWinningCars(this.cars, maxMoveCount);
    return getCarNames(winningCars);
  }
}

export default RacingGame;
