import { getCarNamesInput, getRacingCountInput } from './Views/inputView.js';
import splitAndTrimCarName from './Models/carNamesTrimmer.js';
import validateCarNamesLength from './Controllers/carNamesInputController.js';
import { isRacingCountInputEmpty, isRacingCountTypeNumber } from './Models/validations/racingCountValidator.js';
import { isCarNamesInputNotEmpty, carNamesLengthValidator } from './Models/validations/carNamesValidator.js';
import findProgressionLength from './Models/progressionLengthForEachRacer.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    isCarNamesInputNotEmpty(carNamesInput);
    const spliteAndtrimmedCarName = splitAndTrimCarName(carNamesInput);

    if (validateCarNamesLength(spliteAndtrimmedCarName)) {
      const racingCountInput = await getRacingCountInput();

      isRacingCountInputEmpty(racingCountInput);
      isRacingCountTypeNumber(racingCountInput);
      findProgressionLength(spliteAndtrimmedCarName, racingCountInput);
    }
  }
}

export default App;
