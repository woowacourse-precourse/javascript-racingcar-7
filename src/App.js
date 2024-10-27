import { Console } from '@woowacourse/mission-utils';
import {
  validateInput,
  validateCarNames,
  validateAttempts,
} from './validation.js';
import { initializeCars } from './car.js';
import { runRace, printWinners } from './race.js';

class App {
  async run() {
    try {
      const carNamesInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      validateInput(carNamesInput);
      const carNames = carNamesInput.split(',');
      validateCarNames(carNames);

      const attempts = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );
      validateAttempts(attempts);

      const cars = initializeCars(carNames);
      runRace(cars, attempts);
      printWinners(cars);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
