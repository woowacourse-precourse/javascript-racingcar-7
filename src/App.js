import { inputCarName, inputCount } from "./input.js";
import parseCarNames from "./utils/parseCarNames.js";
import validateCarNames from "./validator/carValidator.js";

class App {
  async run() {
    const input = await inputCarName();
    const carNames = parseCarNames(input);
    validateCarNames(carNames);

    const count = await inputCount();
  }
}

export default App;
