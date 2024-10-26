import CarNameValidator from './validators/CarNameValidator.js';
import { getUserInput } from './utils/Console.js';

class App {
  async run() {
    const userInputCarNames = await getUserInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const carNameList = userInputCarNames
      .split(',')
      .map(carName => carName.trim());

    CarNameValidator.validate(carNameList);
  }
}

export default App;
