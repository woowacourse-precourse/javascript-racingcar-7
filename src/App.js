import { Console, Random } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";
import Car from "./Car.js";

class App {
  #tryCount;
  #carNames;

  async init() {
    await this.setCarNames();
    await this.setTryCount();
  }

  async run() {
    await this.init();
  }

  async setCarNames() {
    try {
      const userInputCarName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const carNames = userInputCarName.split(",");

      this.validateCarName(carNames);
      this.#carNames = [...carNames];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async setTryCount() {
    try {
      const userInputTryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const tryCount = Number(userInputTryCount);

      this.validateTryCount(tryCount);
      this.#tryCount = tryCount;
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

/*
    const carNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    this.#carNames = carNames;
    const tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    this.#tryCount = tryCount;
    Console.print(this.#carNames);
*/

export default App;
