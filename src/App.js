import { InputView } from "./View/InputView.js";
import { OutputView } from "./View/OutputView.js";
import { DELIMITER } from "./utils/constants.js";
import Race from "./Race.js";
import { Validator } from "./utils/Validator.js";

class App {
  #race;
  #attemptCount;

  async run() {
    this.#race = new Race(await this.inputCarName());
    this.#attemptCount = await this.inputAttemptCount();

    await OutputView.progressResult();
    for (let count = 0; count < this.#attemptCount; count++) {
      await this.progress();
    }

    await this.getWinner();
  }

  async inputCarName() {
    const carNameList = await InputView.carNameList();
    const carNameArr = await carNameList.split(DELIMITER.CAR);
    Validator.carNameLength(carNameArr);
    Validator.carNameSame(carNameArr);

    return carNameArr;
  }

  async inputAttemptCount() {
    const attemptCount = Number(await InputView.attemptCount());
    Validator.isNumber(attemptCount);
    Validator.attemptMin(attemptCount);

    return attemptCount;
  }

  async progress() {
    await this.#race.progressCar();
    OutputView.attemptResult(await this.#race.attemptResult());
    OutputView.lineBreak();
  }

  async getWinner() {
    const winners = await this.#race.winner();
    OutputView.winner(winners.join(DELIMITER.WINNER));
  }
}

export default App;
