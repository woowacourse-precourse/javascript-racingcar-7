import getCarNamesInput from './getCarNamesInput.js';
import splitStringByComma from './splitIStringByComma.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const carNames = splitStringByComma(carNamesInput);
  }
}

export default App;
