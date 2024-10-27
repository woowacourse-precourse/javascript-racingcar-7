import InputHandler from "./utils/InputHandler.js";
import OutputHandler from "./utils/OutputHandler.js";
import InputValidator from "./utils/InputValidator.js";
import PlayingGame from "./racingcar/PlayingGame.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
  }

  async run() {
    try {
      const input = await this.inputHandler.getInput(
          "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
      );
      const carNames = input.split(",").map((name) => name.trim());

      InputValidator.validateCarNames(carNames);

      const attemptsInput = await this.inputHandler.getInput("시도할 횟수는 몇 회인가요?");
      const attempts = InputValidator.validateAttempts(attemptsInput);

      const racingGame = new PlayingGame(carNames);
      racingGame.start(attempts);

    } catch (error) {
      OutputHandler.printMessage(error.message);
      throw error;
    }
  }
}

export default App;