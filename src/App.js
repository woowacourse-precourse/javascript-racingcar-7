import { MESSAGE } from "./utils/constants.js";
import { woowahanInput } from "./utils/customInput.js";
import { displayResult } from "./utils/displayResult.js";
import playRace from "./utils/playRace.js";
import settingRace from "./utils/settingRace.js";
import splitName from "./utils/splitInput.js";
import { eachNameLengthValidator, userInputValidator, attemptCountValidator } from "./validator.js";

class App {
  async run() {
    const carNames = await woowahanInput(MESSAGE.INPUT_CAR_NAMES);
    userInputValidator(carNames);

    const splitCarNames = splitName(carNames);
    eachNameLengthValidator(splitCarNames);

    const inputAttemptCount = await woowahanInput(MESSAGE.INPUT_PLAY_TIME);
    attemptCountValidator(inputAttemptCount);
    const attemptCount = parseInt(inputAttemptCount);

    const cars = settingRace(splitCarNames);
    const winnerCarName = playRace(cars, attemptCount);
    displayResult(winnerCarName);
  }
}

export default App;
