import CarsModel from "./CarsModel.js";
import { inputCars, inputTrialCount, printCarsMove, printWinners } from "./interfaceUtils.js";
import { isCarNamesValid, isTrialInputValid } from "./validation.js";

class App {
  async run() {
    const carsUserInput = await inputCars();
    const carsModel = new CarsModel(carsUserInput);

    if (!isCarNamesValid(carsModel.getCarNames())) throw new Error("[ERROR]");

    const trialCountUserInput = await inputTrialCount();
    const trialCount = Number(trialCountUserInput);

    if (!isTrialInputValid(trialCount)) throw new Error("[ERROR]");

    for (let i = 0; i < trialCount; i++) {
      carsModel.moveCars();
      printCarsMove(carsModel.getCarsMap());
    }

    const winnerCars = carsModel.getWinners();
    printWinners(winnerCars);
  }
}

export default App;
