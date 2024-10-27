import { Console } from "@woowacourse/mission-utils";
import InputHandler from "./InputHandler.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
  }

  async run() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분)\n"
    );

    const attempts = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const parsedCarNames = this.inputHandler.parseCarNames(carNames);
    const parsedAttempts = this.inputHandler.parseAttempts(attempts);

    Console.print(
      `parsedCarNames: ${parsedCarNames}, ${typeof parsedCarNames}`
    );
    Console.print(
      `parsedAttempts: ${parsedAttempts}, ${typeof parsedAttempts}`
    );
  }
}

export default App;
