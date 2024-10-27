import InputHandler from "./utils/InputHandler.js";
import OutputHandler from "./utils/OutputHandler.js";
import InputValidator from "./utils/InputValidator.js";
import RacingGame from "./racingcar/RacingGame.js";

// Q. App.js 에 어디까지 구현해도 되는 걸까요?

class App {
  constructor() {
    this.inputHandler = new InputHandler();
  }

  async run() {
    try {
      const carNames = await this.getCarNames();
      const attempts = await this.getAttempts();
      this.startGame(carNames, attempts);
    } catch (error) {
      OutputHandler.printMessage(error.message);
      throw error;
    }
  }

  async getCarNames() {
    const input = await this.inputHandler.getInput("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)");
    const carNames = input.split(",").map((name) => name.trim());
    InputValidator.validateCarNames(carNames);
    return carNames;
  }

  async getAttempts() {
    const attemptsInput = await this.inputHandler.getInput("시도할 횟수는 몇 회인가요?");
    return InputValidator.validateAttempts(attemptsInput);
  }

  startGame(carNames, attempts) {
    const racingGame = new RacingGame(carNames);
    racingGame.start(attempts);
  }
}