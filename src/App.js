import { Console } from "@woowacourse/mission-utils";
import { calculateResult } from "./utils.js";

import View from "./View.js";
import Race from "./Race.js";

class App {
  async run() {
    const cars = await View.readCarNames();
    const attemptCount = await View.readAttemptCount();

    Console.print("\n실행 결과");
    Race.excute(cars, attemptCount);
    const result = calculateResult(cars);
    View.printResult(result);
  }
}

export default App;
