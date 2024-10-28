import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants.js";

import { getAttempts, getCarNames } from "./inputHandlers.js";
import { race } from "./raceHandler.js";
class App {
  async run() {
    const cars = await getCarNames();
    const attemps = await getAttempts();
    Console.print(MESSAGES.EXECUTION_RESULT);
    const result = race(cars, attemps);
  }
}

export default App;
