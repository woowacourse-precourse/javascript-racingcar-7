import { Console } from "@woowacourse/mission-utils";
import { RUN_MESSAGE } from "./constants/constants.js";

class App {
  async run() {
    const inputCarName = await Console.readLineAsync(
      RUN_MESSAGE.INPUT_CAR_NAMES
    );
    const inputAttemptsNumber = await Console.readLineAsync(
      RUN_MESSAGE.INPUT_ATTEMPTS_NUMBER
    );
  }
}

export default App;
