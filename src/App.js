import { EXECUTION_RESULT, FINAL_WINNER, INPUT } from "./constants/race.js";
import { simulateRace } from "./race/race.js";
import { parseCarNames } from "./car/parseCarNames.js";
import { attemptValidator } from "./validation/attemptValidator.js";
import { getInput } from "./view/input.js";
import { getOutput, getResult, getWinner } from "./view/output.js";

class App {
  async run() {
    const carNamesInput = await getInput(INPUT.RACE_CAR_NAME);
    const carNames = parseCarNames(carNamesInput);
    const attemptCountInput = await getInput(INPUT.ATTEMPT_COUNT_PROMPT);
    const attemptCount = attemptValidator(attemptCountInput);

    getOutput("\n" + EXECUTION_RESULT);

    const { raceStates, winners } = simulateRace(carNames, attemptCount);

    await getResult(raceStates);
    getWinner(FINAL_WINNER, winners);
  }
}

export default App;
