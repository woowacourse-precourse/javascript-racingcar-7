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

}

export default App;
