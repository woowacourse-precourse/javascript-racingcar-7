import { getValidatedCarNames, getValidatedAttemptCount } from "./inputHandler.js";
import { simulateRace } from "./raceManager.js";
import { displayWinners } from "./raceView.js";

class App {
  async run() {
    const CARS = await getValidatedCarNames();
    const ATTEMPT_COUNT = await getValidatedAttemptCount();
    const RACE_RESULT = simulateRace(CARS, ATTEMPT_COUNT);

    displayWinners(RACE_RESULT);
  }
}

export default App;
