import { Console, Random } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";
import RacingGame from "./RacingGame.js";
import Printer from "./Printer.js";

class App {
  async run() {
    const carNames = [...(await this.getCarNames())];
    const tryCount = await this.setTryCount();
    const racingGame = new RacingGame(tryCount, carNames);
    racingGame.makeCar();
    racingGame.play();
    Printer.printResult(racingGame);
    Printer.printFinal(racingGame.findWinner());
  }

  async getCarNames() {
    try {
      const userInputCarName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const carNames = userInputCarName.split(",");
      this.validateCarName(carNames);
      return carNames;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async setTryCount() {
    try {
      const userInputTryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const tryCount = Number(userInputTryCount);
      this.validateTryCount(tryCount);
      return tryCount;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  validateCarName(carNames) {
    InputValidator.checkBlank(carNames);
    InputValidator.checkDuplication(carNames);
    InputValidator.checkMultiple(carNames);
    InputValidator.checkNameLength(carNames);
  }

  validateTryCount(tryCount) {
    InputValidator.checkPositive(tryCount);
  }
}

export default App;
