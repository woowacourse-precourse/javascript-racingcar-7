import getCarNamesInput from './getCarNamesInput.js';
import splitStringByComma from './splitIStringByComma.js';
import validateCarNames from './validateCarNames.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const carNames = splitStringByComma(carNamesInput);
    validateCarNames(carNames);
  }
}

export default App;
