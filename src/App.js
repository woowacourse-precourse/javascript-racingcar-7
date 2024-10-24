import { Console } from '@woowacourse/mission-utils';

import { getCars } from '../util/getCars.js';
import { getAttemptCount } from '../util/getAttemptCount.js';
import { initializeCarMoveCount } from '../util/initializeCarMoveCount.js';
import { printExecutionResults } from '../util/printExecutionResults.js';

import { makeNameError } from '../util/error/checkName.js';
import { getRandomValue } from '../util/getRandomValue.js';
import { checkMove } from '../util/checkMove.js';

class App {
  async run() {
    const cars = await getCars();

    const ATTEMPT_COUNT = await getAttemptCount();

    const carMoveHashMap = initializeCarMoveCount(cars);

    printExecutionResults(cars, carMoveHashMap, ATTEMPT_COUNT);

    const winners = [];

    for (let car of cars) {
      if (carMoveCount[car].length === ATTEMPT_COUNT) winners.push(car);
    }

    Console.print(`최종 우승자 : ${winners.join(', ')}`);

  }
}

export default App;
