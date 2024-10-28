import { Console } from '@woowacourse/mission-utils';
import Race from './Race.js';
import InputValidator from './InputValidator.js';

class App {
  async run() {
    try {
      const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const carNames = InputValidator.validateCarNames(carNamesInput);

      const raceAttemptsInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      const raceAttempts = InputValidator.validateRaceAttempts(raceAttemptsInput);

      const race = new Race(carNames, raceAttempts);
      race.startRace();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
