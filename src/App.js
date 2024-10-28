import { getValidatedNumberInput, getValidatedStringInput, printResult } from "./libs/utils.js";
import { INFO_MESSAGE } from "./libs/constants.js";
import { initialRace } from "./libs/initializer.js";
import { printCurrentStatus } from "./view/raceView.js";

class App {
  async run() {
    const carsName = await getValidatedStringInput(INFO_MESSAGE.QUESTION_CARS_NAME);
    const rounds = await getValidatedNumberInput(INFO_MESSAGE.QUESTION_TRAIL);
    const race = initialRace(carsName, rounds);

    for (let i = 0; i < race.rounds; i++) {
      race.startRound();
      const status = race.getCurrentStatus();
      printCurrentStatus(status);
    }
    const finalWinner = race.getFinalWinner();
    printResult(INFO_MESSAGE.ANSWER_FINAL_WINNER + finalWinner);
  }
}

export default App;
