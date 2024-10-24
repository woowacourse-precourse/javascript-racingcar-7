import { getCarNamesInput, getRacingCountInput } from './Views/inputView.js';
import splitAndTrimCarName from './Models/validations/carNamesTrimmer.js';
import validateCarNamesLength from './Controllers/carNamesInputController.js';
import validateRacingCount from './Models/validations/racingCountValidator.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const spliteAndtrimmedCarName = splitAndTrimCarName(carNamesInput);

    if (validateCarNamesLength(spliteAndtrimmedCarName)) {
      const racingCountInput = await getRacingCountInput();
      validateRacingCount(racingCountInput);
      validateRacingCount(racingCountInput);
      console.log('validateRacingCount(racingCountInput): ', validateRacingCount(racingCountInput));
    }
  }
}

export default App;
