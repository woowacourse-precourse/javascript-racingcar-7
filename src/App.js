import { Console } from '@woowacourse/mission-utils';
import { inputCarNames } from './functions/inputCarNames.js';
import { validateCarNames } from './errors/allErrorHandling.js';

class App {
  async run() {
    try {
      const carNames = await inputCarNames();
      validateCarNames(carNames);
      this.printCarNames(carNames); // (작동 확인 용도) 임시 함수
    } catch (error) {
      Console.print(error.message);
    }
  }

  printCarNames(carNames) {
    Console.print(`입력된 자동차 이름: ${carNames.join(', ')}`);
  }
}

export default App;
