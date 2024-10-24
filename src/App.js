import CarsModel from "./CarsModel.js";
import { inputCars, inputTrialCount, printCarsMove, printWinners } from "./interfaceUtils.js";

class App {
  async run() {
    const carsUserInput = await inputCars();
    const carsModel = new CarsModel(carsUserInput);

    const trialCountUserInput = await inputTrialCount();
    const trialCount = Number(trialCountUserInput);

    for (let i = 0; i < trialCount; i++) {
      carsModel.moveCars();
      printCarsMove(carsModel.getCarsMap());
    }

    const winnerCars = carsModel.getWinners();
    printWinners(winnerCars);
  }
}

export default App;
