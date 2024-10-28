import { Console } from '@woowacourse/mission-utils';
import {
  inputCarNames,
  inputAttemptsNumber,
  calculateCarRacing,
  printRacingResult,
  calculateWinner,
  printWhoIsWinner,
} from './functions/index.js';
import { validateCarNames } from './errors/allErrorHandling.js';

class App {
  async run() {
    try {
      const carNames = await inputCarNames();
      validateCarNames(carNames);

      const attempts = await inputAttemptsNumber();

      const resultsPerAttempt = calculateCarRacing(carNames, attempts);
      printRacingResult(resultsPerAttempt, carNames);

      const winner = calculateWinner(resultsPerAttempt[resultsPerAttempt.length - 1]);
      printWhoIsWinner(winner);
    } catch (error) {
      Console.print(error.message);
      throw error; // 예외를 다시 던져 테스트가 감지할 수 있도록 함
    }
  }
}

export default App;
