import converStringToNumber from './convertStringToNumber.js';
import getAttemptsInput from './getAttemptsInput.js';
import getCarNamesInput from './getCarNamesInput.js';
import splitStringByComma from './splitIStringByComma.js';
import validateAttempts from './validateAttempts.js';
import validateCarNames from './validateCarNames.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const carNames = splitStringByComma(carNamesInput);
    validateCarNames(carNames);

    const attemptsInput = await getAttemptsInput();
    validateAttempts(attemptsInput);
    const attempts = converStringToNumber(attemptsInput);
  }
}

export default App;
