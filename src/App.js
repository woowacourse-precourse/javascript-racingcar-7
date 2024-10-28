import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants.js";

import { getAttempts, getCarNames } from "./inputHandlers.js";
class App {
  async run() {
    const cars = await getCarNames();
    const attemps = await getAttempts();
    Console.print(MESSAGES.EXECUTION_RESULT);
  }
}

export default App;
