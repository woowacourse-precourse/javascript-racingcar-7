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
  }
}

export default App;
