import { Console } from "@woowacourse/mission-utils";
import { getCarNames } from "./utils/index.js";

class App {
  async run() {
    const carNames = await getCarNames();
  }
}

export default App;
