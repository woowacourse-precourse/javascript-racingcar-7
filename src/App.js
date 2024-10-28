import { getValidatedNumberInput, getValidatedStringInput, printResult } from "./libs/utils.js";
import { INFO_MESSAGE } from "./libs/constants.js";
import { initialRace } from "./libs/initializer.js";
import { printCurrentStatus, printFinalWinner } from "./view/raceView.js";

class App {
  async run() {
    const carsName = await getValidatedStringInput(INFO_MESSAGE.QUESTION_CARS_NAME);
    const rounds = await getValidatedNumberInput(INFO_MESSAGE.QUESTION_TRAIL);
    const race = initialRace(carsName, rounds);

    for (let i = 0; i < race.getRounds(); i++) {
      race.startRound();
      const status = race.getCurrentStatus();
      printCurrentStatus(status);
    }
    const finalWinner = race.getFinalWinner();
    printFinalWinner(finalWinner);
  }
}

export default App;
