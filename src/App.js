import CarManager from "./CarManager.js";
import { InputValidation, InputView } from "./InputView.js";
import OutputView from "./OutputView.js";
import { StringUtils } from "./Util.js";

class App {
  async run() {
    const userCarNamesInput = await InputView.getCarNames();
    const carNames = StringUtils.stringToArray(userCarNamesInput);
    InputValidation.validateCarNames(carNames);

    const userTryCountInput = await InputView.getTryCount();
    InputValidation.validateTryCount(userTryCountInput);

    const tryCount = Number(userTryCountInput);
    const carManager = new CarManager(carNames);

    OutputView.printResultTitle();
    for (let i = 0; i < tryCount; i++) {
      carManager.moveCars();
      OutputView.printEachStep(carManager);
    }

    OutputView.printWinner(carManager);
  }
}

export default App;
