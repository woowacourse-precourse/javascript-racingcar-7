import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import Race from "../models/Race.js";
import Validator from "../utils/Validator.js";

class RaceController {
  run() {
    InputView.readCarNames((carNames) => {
      try {
        Validator.validateCarNames(carNames);
        InputView.readAttemptCount((attemptCount) => {
          try {
            Validator.validateAttemptCount(attemptCount);
            const race = new Race(carNames, parseInt(attemptCount, 10));
            race.start();
          } catch (error) {
            OutputView.printError(error.message);
          }
        });
      } catch (error) {
        OutputView.printError(error.message);
      }
    });
  }
}

export default RaceController;