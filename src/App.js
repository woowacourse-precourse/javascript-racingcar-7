import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import runRaceRounds from './runRaceRounds.js';
import Validator from './Validator.js';
import printWinners from './printWinners.js';

class App {
  async run() {
    try {
      const nameString = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      Validator.checkNameString(nameString);

      const names = nameString.split(',');
      Validator.checkNames(names);
      const cars = names.map((name) => new Car(name));

      const roundCount = Number(
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')
      );
      Validator.checkRoundCount(roundCount);

      runRaceRounds(cars, roundCount);
      printWinners(cars);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
