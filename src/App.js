import { Console } from "@woowacourse/mission-utils";
import carNameInput from "./UI/carNameInput.js";
import errorHandler from "./Error/errorHandler.js";
import trialCountInput from "./UI/trialCountInput.js";
import createRacerInformation from "./racerData/racer.js";
import raceProgression from "./feature/raceProgression.js";
import getWinner from "./feature/getWinner.js";

class App {
  async run() {
    try {
      const CAR_LIST = await carNameInput();
      const TRIAL_COUNT = await trialCountInput();

      const INITIAL_RACE_HISTORY = createRacerInformation(CAR_LIST);
      const RACE_PROGRESS = raceProgression(CAR_LIST, INITIAL_RACE_HISTORY, TRIAL_COUNT);
      getWinner(CAR_LIST, RACE_PROGRESS);
    } catch (error) {
      errorHandler(error);
    }
  }
}

export default App;
