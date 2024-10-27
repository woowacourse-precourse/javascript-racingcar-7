import {
  makeCars, repeat, getMaxPosition, findCarWithMaxPosition,
} from './services/RacingGameService.js';

import {
  getCarName, splitCarName, getAttemptCount, validateCarNames,
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

    this.carList = makeCars(splittedCarName);
    repeat(this.carList, attemptCount);

    const maxPosition = getMaxPosition(this.carList);
    const winnerNames = findCarWithMaxPosition(this.carList, maxPosition);
    printWinnerCar(winnerNames);
  }

  getCarList() {
    return this.carList;
  }
}

export default App;
