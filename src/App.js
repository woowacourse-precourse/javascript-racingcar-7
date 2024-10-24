import { getCars } from '../util/get/getCars.js';
import { getAttemptCount } from '../util/get/getAttemptCount.js';
import { initializeCarMoveCount } from '../util/initializeCarMoveCount.js';
import { printExecutionResults } from '../util/print/printExecutionResults.js';
import { printWinner } from '../util/print/printWinner.js';

class App {
  async run() {
    const cars = await getCars();

    const ATTEMPT_COUNT = await getAttemptCount();

    const carMoveHashMap = initializeCarMoveCount(cars);

    printExecutionResults(cars, carMoveHashMap, ATTEMPT_COUNT);

    printWinner(cars, carMoveHashMap, ATTEMPT_COUNT);
  }
}

export default App;
