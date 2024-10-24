import { getCarNamesInput, getRacingCountInput } from './views/inputView.js';
import { isCarNamesInputNoEmpty, isCarNamesInputTypeOfNum, isCarNamesInputValidatedLength } from './errors/carNamesErrors.js';
import splitAndTrimCarName from './models/carNamesTrimmer.js';
import { isRacingCountInputNoEmpty, isRacingCountTypeNumber } from './errors/racingCountErrors.js';
import findProgressionLength from './models/racingProgressionLength.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    isCarNamesInputNoEmpty(carNamesInput);
 
    const carNameWords = splitAndTrimCarName(carNamesInput);
    isCarNamesInputTypeOfNum(carNameWords);

    if (isCarNamesInputValidatedLength(carNameWords)) {
      const racingCountInput = await getRacingCountInput();
      isRacingCountInputNoEmpty(racingCountInput);
      isRacingCountTypeNumber(racingCountInput);
      findProgressionLength(carNameWords, racingCountInput);
    }
  }
}

export default App;
