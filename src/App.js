import { INPUT } from "./constants/race.js";
import { parseCarNames } from "./car/parseCarNames.js";
import { getInput } from "./view/input.js";

class App {
  async run() {
    const carNamesInput = await getInput(INPUT.RACE_CAR_NAME);
    const carNames = parseCarNames(carNamesInput);
    const attemptCountInput = await getInput(INPUT.ATTEMPT_COUNT_PROMPT);
  }
}

export default App;
