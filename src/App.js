import CarsModel from "./CarsModel.js";
import { ERROR_MESSAGES, MESSAGES } from "./constants/message.js";
import { getInputAsync, printCarsMove, printWinners } from "./interfaceUtils.js";
import { isCarNamesValid, isTrialInputValid } from "./validation.js";

class App {
  async run() {
    const carsUserInput = await getInputAsync(MESSAGES.INPUT_CAR_NAMES);
    const carsModel = new CarsModel(carsUserInput);

    if (!isCarNamesValid(carsModel.getCarNames())) throw new Error(ERROR_MESSAGES.PREFIX);

    const trialCountUserInput = await getInputAsync(MESSAGES.INPUT_TRIAL_COUNT);
    const trialCount = Number(trialCountUserInput);

    if (!isTrialInputValid(trialCount)) throw new Error(ERROR_MESSAGES.PREFIX);

    for (let i = 0; i < trialCount; i++) {
      carsModel.moveCars();
      printCarsMove(carsModel.getCarsMap());
    }

    const winnerCars = carsModel.getWinners();
    printWinners(winnerCars);
  }
}

export default App;
