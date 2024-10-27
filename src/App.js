import { getCars } from '../util/get/getCars.js';
import { getAttemptCount } from '../util/get/getAttemptCount.js';
import { initializeCarMoveCount } from '../util/initializeCarMoveCount.js';
import { printExecutionResults } from '../util/print/printExecutionResults.js';
import { findWinner } from '../util/find/findWinner.js';

class App {
  async run() {
    const cars = await getCars(); // 자동차 입력

    const ATTEMPT_COUNT = await getAttemptCount(); // 시행 횟수 입력

    const carMoveObj = initializeCarMoveCount(cars); // 객체 초기화

    printExecutionResults(cars, carMoveObj, ATTEMPT_COUNT); // 진행 상황 출력

    findWinner(cars, carMoveObj, ATTEMPT_COUNT); // 우승자 출력
  }
}

export default App;
