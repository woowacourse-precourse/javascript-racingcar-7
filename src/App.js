import CarsModel from "./CarsModel.js";
import { ERROR_MESSAGES, MESSAGES } from "./constants/message.js";
import {
  getInputAsync,
  printCarsMove,
  printWinners,
} from "./interfaceUtils.js";
import { isCarNamesValid, isTrialInputValid } from "./validation.js";

class App {
  async run() {
    const carsUserInput = await getInputAsync(MESSAGES.INPUT_CAR_NAMES);
    const carsModel = new CarsModel(carsUserInput);

    const { isCarValid, errCarMessage } = isCarNamesValid(
      carsModel.getCarNames(),
    );
    if (!isCarValid) throw new Error(ERROR_MESSAGES.PREFIX + errCarMessage);

    const trialCountUserInput = await getInputAsync(MESSAGES.INPUT_TRIAL_COUNT);

    const { isTrialValid, errTrialMessage } =
      isTrialInputValid(trialCountUserInput);
    if (!isTrialValid) throw new Error(ERROR_MESSAGES.PREFIX + errTrialMessage);

    const trialCount = Number(trialCountUserInput);

    for (let i = 0; i < trialCount; i++) {
      carsModel.moveCars();
      printCarsMove(carsModel.getCarsMap());
    }

    const winners = carsModel.getWinners();
    printWinners(winners);
  }
}

export default App;
