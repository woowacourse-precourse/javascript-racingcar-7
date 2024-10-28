import { Console } from '@woowacourse/mission-utils';
import { inputCarNames } from './functions/inputCarNames.js';
import { inputAttemptsNumber } from './functions/inputAttempsNumber.js';
import { validateCarNames } from './errors/allErrorHandling.js';
import { calculateCarRacing } from './functions/calculateCarRacing.js';
import { printRacingResult } from './functions/printRacingResult.js';
import { calculateWinner } from './functions/calculateWinner.js';
import { printWhoIsWinner } from './functions/printWhoIsWinner.js';

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
    }
  }
}

export default App;