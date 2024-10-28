import { Console } from "@woowacourse/mission-utils";
import CarNameValidator from "./validators/carNameValidator.js";
import TryCountValidator from "./validators/TryCountValidator.js";
import RacingGame from "./RacingGame.js";
import Printer from "./Printer.js";
import { MESSAGE } from "./constants.js";

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
      const userInputCarName = await Console.readLineAsync(MESSAGE.INPUT_NAME);
      const carNames = userInputCarName.split(",");
      this.validateCarName(carNames);
      return carNames;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async setTryCount() {
    try {
      const userInputTryCount = await Console.readLineAsync(MESSAGE.INPUT_TRYCOUNT);
      const tryCount = Number(userInputTryCount);
      this.validateTryCount(tryCount);
      return tryCount;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  validateCarName(carNames) {
    CarNameValidator.checkBlank(carNames);
    CarNameValidator.checkDuplication(carNames);
    CarNameValidator.checkMultiple(carNames);
    CarNameValidator.checkNameLength(carNames);
  }

  validateTryCount(tryCount) {
    TryCountValidator.checkPositive(tryCount);
    TryCountValidator.checkOverMax(tryCount);
  }
}

export default App;
