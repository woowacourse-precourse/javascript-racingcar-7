import { startCarRace } from "./carRace/index.js";
import { Console } from "@woowacourse/mission-utils";
import { RUN_MESSAGE } from "./constants/constants.js";
import { validateCarName } from "./validation/validateCarName/index.js";
import { validateAttemptsNumber } from "./validation/validateAttemptsNumber/validateAttemptsNumber.js";

class App {
  async run() {
    const inputCarName = await Console.readLineAsync(RUN_MESSAGE.INPUT_CAR_NAMES);
    validateCarName(inputCarName);
    const inputAttemptsNumber = await Console.readLineAsync(RUN_MESSAGE.INPUT_ATTEMPTS_NUMBER);
    validateAttemptsNumber(inputAttemptsNumber);
    startCarRace(inputCarName, inputAttemptsNumber);
  }
}

export default App;
