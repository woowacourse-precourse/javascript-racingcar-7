import { getCarNamesInput, getRacingCountInput } from './views/inputView.js';
import { isCarNamesInputNotEmpty } from './errors/carNamesErrors.js';
import splitAndTrimCarName from './models/carNamesTrimmer.js';
import validateCarNamesLength from './controllers/carNamesInputController.js';
import { isRacingCountInputEmpty, isRacingCountTypeNumber } from './models/validations/racingCountValidator.js';
import findProgressionLength from './models/racingProgressionLength.js';


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
