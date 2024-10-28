import { Console } from "@woowacourse/mission-utils";
import { getCarNames, checkForDuplicates } from "./utils/index.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      checkForDuplicates(carNames);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
