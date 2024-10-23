import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/index.js";
import {
  getCarNames,
  assertCondition,
  createErrorMessage,
  hasDuplicate,
  hasInvalidCarNameLength,
  getTryCount,
} from "./utils/index.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      assertCondition(hasDuplicate(carNames), createErrorMessage(MESSAGES.DUPLICATE_CAR_NAME));
      assertCondition(hasInvalidCarNameLength(carNames), createErrorMessage(MESSAGES.INVALID_CAR_NAME_LENGTH));

      const tryCount = await getTryCount();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
