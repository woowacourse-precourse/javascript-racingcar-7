import {
  makeCars, raceCars, getMaxPosition, findWinnerCars,
} from './services/RacingGameService.js';

import {
  getCarName, splitCarName, getAttemptCount, validateCarNames, validateAttemptCount,
} from './utils/InputUtils.js';

import { printWinnerCar } from './utils/OutputUtils.js';

class App {
  constructor() {
    this.carList = [];
  }

  async run() {
    const carNames = await getCarName();
    const splittedCarName = splitCarName(carNames);
    validateCarNames(splittedCarName);

    const attemptCount = await getAttemptCount();
    validateAttemptCount(attemptCount);

    this.carList = makeCars(splittedCarName);
    raceCars(this.carList, attemptCount);

    const maxPosition = getMaxPosition(this.carList);
    const winnerNames = findWinnerCars(this.carList, maxPosition);
    printWinnerCar(winnerNames);
  }

  getCarList() {
    return this.carList;
  }
}

export default App;
