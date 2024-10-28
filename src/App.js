import { Console } from "@woowacourse/mission-utils";
import racingSituation from "./utils/racingSituation.js";
import carInput from "./utils/carInput.js";
import totalTryInput from "./utils/totalTryInput.js";
class App {
  async run() {
    const carNames = await carInput();
    const totalTries = await totalTryInput();
    const result = await racingSituation(carNames, totalTries);
    Console.print(`최종 우승자 : ${result}`);
    return result;
  }
}

export default App;
