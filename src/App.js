import { getValidatedCarNames, getValidatedAttemptCount } from "./inputHandler.js";
import { simulateRace, displayWinners } from "./raceManager.js";

class App {
  async run() {
    const CARS = await getValidatedCarNames();
    console.log(CARS);

    const ATTEMPT_COUNT = await getValidatedAttemptCount();
      console.log("Attempt Count:", ATTEMPT_COUNT);

    const RACE_RESULT = simulateRace(CARS, ATTEMPT_COUNT);
    displayWinners(RACE_RESULT);
  }
}

export default App;
