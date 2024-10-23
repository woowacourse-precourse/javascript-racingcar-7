import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/index.js";
import { getCarNames, assertCondition, createErrorMessage, hasDuplicate } from "./utils/index.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      assertCondition(hasDuplicate(carNames), createErrorMessage(MESSAGES.DUPLICATE_CAR_NAME));
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
