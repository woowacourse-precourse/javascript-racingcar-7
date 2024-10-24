import { Console } from '@woowacourse/mission-utils';

import { getCars } from '../util/get/getCars.js';
import { getAttemptCount } from '../util/get/getAttemptCount.js';
import { initializeCarMoveCount } from '../util/initializeCarMoveCount.js';
import { printExecutionResults } from '../util/print/printExecutionResults.js';

class App {
  async run() {
    const cars = await getCars();

    const ATTEMPT_COUNT = await getAttemptCount();

    const carMoveHashMap = initializeCarMoveCount(cars);

    printExecutionResults(cars, carMoveHashMap, ATTEMPT_COUNT);

    const winners = [];

    for (let car of cars) {
      if (carMoveHashMap[car].length === ATTEMPT_COUNT) winners.push(car);
    }

    Console.print(`최종 우승자 : ${winners.join(', ')}`);

  }
}

export default App;
