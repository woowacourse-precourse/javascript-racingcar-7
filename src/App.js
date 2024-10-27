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
  async run() {}
}

export default App;
