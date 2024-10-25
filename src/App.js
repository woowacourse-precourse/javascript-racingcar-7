import { inputCarNames, inputPlayTime } from "./utils/customInput.js";
import settingRace from "./utils/settingRace.js";
import splitName from "./utils/splitInput.js";
import { eachNameLengthValidator, userInputValidator, attemptCountValidator } from "./validator.js";

class App {
  async run() {
    const carNames = await inputCarNames();
    userInputValidator(carNames);

    const splitCarNames = splitName(carNames);
    eachNameLengthValidator(splitCarNames);

    const inputAttemptCount = await inputPlayTime();
    attemptCountValidator(inputAttemptCount);
    const attemptCount = parseInt(inputAttemptCount);

    const cars = settingRace(splitCarNames);
  }
}

export default App;
