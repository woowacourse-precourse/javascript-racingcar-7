import { inputCarNames, inputCount } from "./input.js";
import parseCarNames from "./utils/parseCarNames.js";
import validateCarNames from "./validator/carValidator.js";
import validateCount from "./validator/countValidator.js";

class App {
  async run() {
    const carNamesInput = await inputCarNames();
    const carNames = parseCarNames(carNamesInput);
    validateCarNames(carNames);

    const countInput = await inputCount();
    const count = validateCount(countInput);
  }
}

export default App;
