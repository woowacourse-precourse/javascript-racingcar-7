import inputCarNames from "./utils/inputCarNames.js";
import splitName from "./utils/splitInput.js";

class App {
  async run() {
    const carNames = await inputCarNames();
    const splitCarNames = splitName(carNames);
  }
}

export default App;
