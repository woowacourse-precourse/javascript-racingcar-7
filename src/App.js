import { EXECUTION_RESULT, INPUT } from "./constants/race.js";
import { simulateRace } from "./race/race.js";
import { INPUT } from "./constants/race.js";
import { parseCarNames } from "./car/parseCarNames.js";
import { attemptValidator } from "./validation/attemptValidator.js";
import { getInput } from "./view/input.js";

class App {
  async run() {
    const carNamesInput = await getInput(INPUT.RACE_CAR_NAME);
    const carNames = parseCarNames(carNamesInput);
    const attemptCountInput = await getInput(INPUT.ATTEMPT_COUNT_PROMPT);
    const attemptCount = attemptValidator(attemptCountInput);
  }
}

export default App;
