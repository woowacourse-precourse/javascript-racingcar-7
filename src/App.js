import { InputView } from "./View/InputView.js";
import Race from "./Race.js";
import { Validator } from "./Validator.js";
import { OutputView } from "./View/OutputView.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNameList = await InputView.carNameList();
    const carNameArr = await carNameList.split(",");
    await this.validateCarName(carNameArr);

    const attemptCount = Number(await InputView.attemptCount());
    await this.validateAttemptCount(attemptCount);

    const race = new Race(carNameArr);

    OutputView.progressResult();
    for (let count = 0; count < attemptCount; count++) {
      await race.progressCar();
      OutputView.attemptResult(await race.attemptResult());
      OutputView.lineBreak();
    }

    await race.winner();
  }

  async validateCarName(arr) {
    Validator.carNameLength(arr);
    Validator.carNameSame(arr);
  }

  async validateAttemptCount(number) {
    Validator.isNumber(number);
    Validator.attemptMin(number);
  }
}

export default App;
