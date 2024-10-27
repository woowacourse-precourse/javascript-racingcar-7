import { Console } from "@woowacourse/mission-utils";
import Racing from './Racing.js';

class App {
  async run() {
    try {
      const inputCarName = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const inputAttempts = await Console.readLineAsync('시도할 횟수를 입력하세요.\n');

      const racing = new Racing(inputCarName, inputAttempts);
      racing.start();
      racing.showWinner();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;