import { getUserInput } from './utils/Console.js';
import { parseCarNames, parseAttempt } from './utils/Parser.js';
import CarNameValidator from './validators/CarNameValidator.js';
import AttemptValidator from './validators/AttemptValidator.js';

class App {
  async run() {
    const userInputCarNames = await getUserInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const carNameList = parseCarNames(userInputCarNames);
    CarNameValidator.validate(carNameList);

    const userInputAttempt = await getUserInput('시도할 횟수는 몇 회인가요?\n');

    const roundAttempt = parseAttempt(userInputAttempt);
    AttemptValidator.validate(roundAttempt);
  }
}

export default App;
