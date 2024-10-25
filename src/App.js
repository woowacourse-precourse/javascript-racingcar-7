import { getCarNamesInput, getRacingCountInput } from './views/inputView.js';
import { validateNotEmpty, validateStringInput, validateLength } from './validations/carNamesValidator.js';
import splitAndTrimCarName from './models/carNamesTrimmer.js';
import { isRacingCountInputNoEmpty, isRacingCountTypeNumber } from './validations/racingCountValidator.js';
import findProgressionLength from './models/racingProgressionLength.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    validateNotEmpty(carNamesInput);
 
    const carNameWords = splitAndTrimCarName(carNamesInput);
    validateStringInput(carNameWords);

    if (validateLength(carNameWords)) {
      const racingCountInput = await getRacingCountInput();
      isRacingCountInputNoEmpty(racingCountInput);
      isRacingCountTypeNumber(racingCountInput);
      findProgressionLength(carNameWords, racingCountInput);
    }
  }
}

export default App;
