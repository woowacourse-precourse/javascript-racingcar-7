import inputCarName from "./input.js";
import parseCarNames from "./utils/parseCarNames.js";
import validateCarNames from "./validator/carValidator.js";

class App {
  async run() {
    const input = await inputCarName();
    const carNames = parseCarNames(input);
    validateCarNames(carNames);
  }
}

export default App;
