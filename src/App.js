import { getCarNamesInput, getRacingCountInput } from './views/inputView.js';
import {
  validateNotEmpty,
  validateStringInput,
  validateLength,
  validateArrNotDuplication,
} from './validations/carNamesValidator.js';
import splitAndTrimCarName from './services/carNamesTrimmer.js';
import {
  isRacingCountInputNoEmpty,
  isRacingCountTypeNumber,
} from './validations/racingCountValidator.js';
import updateRacingProgress from './services/racingLength.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    validateNotEmpty(carNamesInput);
    const carNameWords = splitAndTrimCarName(carNamesInput);
    validateStringInput(carNameWords);
    validateArrNotDuplication(carNameWords);

    if (validateLength(carNameWords)) {
      const racingCountInput = await getRacingCountInput();
      isRacingCountInputNoEmpty(racingCountInput);
      isRacingCountTypeNumber(racingCountInput);
      updateRacingProgress(carNameWords, racingCountInput);
    }
  }
}

export default App;
