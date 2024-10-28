import { Console } from "@woowacourse/mission-utils";
import {
  getCarNames,
  checkForDuplicates,
  hasInvalidCarNameLength,
} from "./utils/index.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      checkForDuplicates(carNames);
      hasInvalidCarNameLength(carNames);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
