import { getValidatedCarNames, getValidatedAttemptCount } from "./inputHandler.js";

class App {
  async run() {
    const CARS = await getValidatedCarNames();
    console.log(CARS);

    const ATTEMPT_COUNT = await getValidatedAttemptCount();
      console.log("Attempt Count:", ATTEMPT_COUNT);

  }
}

export default App;
