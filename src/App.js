import { Console } from "@woowacourse/mission-utils";
import Racing from './Racing.js';
import Validate from './Validate.js';

class App {
  async run() {
    try {
      const inputCarName = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const inputAttempts = await Console.readLineAsync('시도할 횟수를 입력하세요.\n');

      const input = Validate.validateCar(inputCarName);
      const attemps = Validate.validateAttempts(inputAttempts);

      const racing = new Racing(input, attemps);
      racing.runGame();
      racing.showWinner();

    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;