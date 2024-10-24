import { Console } from "@woowacourse/mission-utils";
import inputCarNames from "./utils/InputCarNames.js";
import { splitNames } from "./utils/SplitInput.js";

class App {
  async run() {
    const carNames = await inputCarNames();
    const splitCarNames = splitNames(carNames);
  }
}

export default App;
