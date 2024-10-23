import { Console } from '@woowacourse/mission-utils';
import isValidInput from '../src/NameValidation.js';

class App {
  async run() {
    const userInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    isValidInput(userInput.trim());
    Console.print(userInput);
  }
}

export default App;
