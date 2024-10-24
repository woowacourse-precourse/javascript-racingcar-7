import { inputCarNames } from "./utils/inputCarNames.js";
import splitName from "./utils/splitInput.js";
import { eachNameLengthValidator, userInputValidator } from "./validator.js";

class App {
  async run() {
    const carNames = await inputCarNames();
    userInputValidator(carNames);
    
    const splitCarNames = splitName(carNames);
    eachNameLengthValidator(splitCarNames);
  }
}

export default App;
