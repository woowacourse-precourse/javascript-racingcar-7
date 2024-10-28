import {
  printKeyValueFormat,
  printNewLine,
  printPrevNewLine,
} from '../utils/ioModule.js';
import {
  getMovePosition,
  getMaxMoveCount,
  filterWinningCars,
  getCarNames,
} from './racingGameUtils.js';
import { PRINT_MESSAGES } from '../constants/messages.js';
import { joinByComma } from '../utils/stringUtils.js';

class RacingGame {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  play() {
    printPrevNewLine(PRINT_MESSAGES.OUTPUT.RESULT);

    for (let i = 0; i < this.tryCount; i += 1) {
      this.cars.forEach((car) => car.move());
      this.printCurrentState();
    }

    this.printWinner();
  }

  printCurrentState() {
    this.cars.forEach((car) => {
      const movePosition = getMovePosition(car);
      printKeyValueFormat(car.getName(), movePosition);
    });
    printNewLine();
  }

  getWinnerNames() {
    const maxMoveCount = getMaxMoveCount(this.cars);
    const winningCars = filterWinningCars(this.cars, maxMoveCount);
    return getCarNames(winningCars);
  }

  printWinner() {
    const winners = this.getWinnerNames();
    printKeyValueFormat(PRINT_MESSAGES.OUTPUT.WINNER, joinByComma(winners));
  }
}

export default RacingGame;
