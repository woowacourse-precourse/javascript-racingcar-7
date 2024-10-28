import { Console } from "@woowacourse/mission-utils";
import InputHandler from "./InputHandler.js";
import ErrorHandler from "./ErrorHandler.js";
import Race from "./Race.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.errorHandler = new ErrorHandler();
    this.race = null;
  }

  async run() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)로 구분)\n"
    );

    const attempts = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const parsedCarNames = this.inputHandler.parseCarNames(carNames);
    const parsedAttempts = this.inputHandler.parseAttempts(attempts);

    parsedCarNames.forEach((name) => {
      this.errorHandler.checkCarName(name);
      this.errorHandler.checkCarNull(name);
    });

    this.errorHandler.checkAttemptInt(parsedAttempts);

    this.race = new Race(parsedCarNames);
    this.race.attempt(parsedAttempts);

    const winners = this.race.getWinners();
    Console.print(`최종 우승자: ${winners.join(", ")}`);
  }
}

export default App;
