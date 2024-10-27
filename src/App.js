import converStringToNumber from './convertStringToNumber.js';
import getAttemptsInput from './getAttemptsInput.js';
import getCarNamesInput from './getCarNamesInput.js';
import playGame from './playGame.js';
import splitStringByComma from './splitIStringByComma.js';
import Validator from './utils/Validator.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const carNames = splitStringByComma(carNamesInput);
    Validator.validateCarNames(carNames);

    const attemptsInput = await getAttemptsInput();
    Validator.validateAttempts(attemptsInput);
    const attempts = converStringToNumber(attemptsInput);

    playGame(carNames, attempts);
  }
}

export default App;
