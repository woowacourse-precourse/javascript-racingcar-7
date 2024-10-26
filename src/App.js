import CarNameValidator from './validators/CarNameValidator.js';
import { getUserInput } from './utils/Console.js';
import { parseCarNames } from './utils/Parser.js';

class App {
  async run() {
    const userInputCarNames = await getUserInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const carNameList = parseCarNames(userInputCarNames);
    CarNameValidator.validate(carNameList);

    const userInputAttempt = await getUserInput('시도할 횟수는 몇 회인가요?\n');

    if (userInputAttempt.trim() === '') {
      throw new Error('[ERROR] 시도 횟수에 공백만 입력하시면 안됩니다.');
    }
    const attempts = Number(userInputAttempt);
    if (Number.isNaN(attempts)) {
      throw new Error('[ERROR] 숫자가 아닌 값을 입력하시면 안됩니다.');
    }
    if (attempts < 1) {
      throw new Error('[ERROR] 1 이상의 숫자를 입력하시면 안됩니다.');
    }
  }
}

export default App;
