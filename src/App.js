import { Console } from "@woowacourse/mission-utils";
import {
  getCarNames,
  checkForDuplicates,
  hasInvalidCarNameLength,
  getTryCount,
  isPositiveInteger,
} from "./utils/index.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      checkForDuplicates(carNames);
      hasInvalidCarNameLength(carNames);

      const tryCount = await getTryCount();
      isPositiveInteger(tryCount);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
