import { getCarNamesInput, getRacingCountInput } from './views/inputView.js';
import { isCarNamesInputNotEmpty, isCarNamesInputTypeOfNum, isCarNamesInputValidatedLength } from './errors/carNamesErrors.js';
import splitAndTrimCarName from './models/carNamesTrimmer.js';
import { isRacingCountInputEmpty, isRacingCountTypeNumber } from './errors/racingCountErrors.js';
import findProgressionLength from './models/racingProgressionLength.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    isCarNamesInputNotEmpty(carNamesInput);

    const spliteAndtrimmedCarName = splitAndTrimCarName(carNamesInput);
    isCarNamesInputTypeOfNum(spliteAndtrimmedCarName);

    if (isCarNamesInputValidatedLength(spliteAndtrimmedCarName)) {
      const racingCountInput = await getRacingCountInput();
      isRacingCountInputEmpty(racingCountInput);
      isRacingCountTypeNumber(racingCountInput);
      findProgressionLength(spliteAndtrimmedCarName, racingCountInput);
    }
  }
}

export default App;
