import { Console } from '@woowacourse/mission-utils';

import { getCarNames, getTryCount } from './getInput/index.js';
import {
  checkDuplicateNames,
  checkEmptyString,
  checkMinimumCars,
  validateCarNames,
  tryCountEmptyCheck,
  tryCountIntegerCheck,
  tryCountNumberCheck,
  validateTryCountIsPositive,
} from './validations/index.js';

import { runRaceRound } from './raceLogic/runRaceRound.js';
import { getWinners } from './output/getWinners.js';

class App {
  async run() {
    const CAR_NAMES = await this.initializeCarNames();
    const TRY_COUNT = await this.initializeTryCount();

    const WINNERS = this.startRace(CAR_NAMES, TRY_COUNT);
    this.displayWinners(WINNERS, CAR_NAMES);
  }

  async initializeCarNames() {
    const PARSED_CAR_NAMES = await getCarNames();
    this.validateCarNames(PARSED_CAR_NAMES);
    return PARSED_CAR_NAMES;
  }

  async initializeTryCount() {
    const TRY_COUNT = await getTryCount();
    this.validateTryCount(TRY_COUNT);
    return TRY_COUNT;
  }

  validateCarNames(carNames) {
    checkEmptyString(carNames);
    checkDuplicateNames(carNames);
    checkMinimumCars(carNames);
    validateCarNames(carNames);
  }

  validateTryCount(tryCount) {
    tryCountEmptyCheck(tryCount);
    tryCountNumberCheck(tryCount);
    tryCountIntegerCheck(tryCount);
    validateTryCountIsPositive(tryCount);
  }

  startRace(carNames, tryCount) {
    const MOVE_FORWARD_COUNT_ARRAY = new Array(carNames.length).fill(0);
    Console.print('\n실행 결과');

    Array.from({ length: tryCount }).forEach(() => {
      runRaceRound(carNames, MOVE_FORWARD_COUNT_ARRAY);
      Console.print('');
    });

    return MOVE_FORWARD_COUNT_ARRAY;
  }

  displayWinners(moveForwardCountArray, carNames) {
    try {
      const WINNERS = getWinners(carNames, moveForwardCountArray);
      Console.print(`최종 우승자 : ${WINNERS.join(', ')}`);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
