import { userInputCarNames, userInputTryCount } from './utils/getInputUtils.js';
import { splitAndRemoveWhitespace } from './utils/carNameUtils.js';
import {
  printRoundStatus,
  printToStartGame,
  printWinners,
} from './utils/printUtils.js';
import { validateCarNames, validateTryCount } from './validate/validateion.js';
import { createCarObjectsFromNames } from './createCarObjects.js';
import { moveCars } from './gameLogic.js';
import {
  getMaxPosition,
  filterCarsByMaxPosition,
  extractCarNames,
} from './utils/raceResultUtils.js';

class App {
  async run() {
    try {
      const inputCarNames = await userInputCarNames();
      const processedCarNames = splitAndRemoveWhitespace(inputCarNames);

      validateCarNames(processedCarNames);

      const cars = createCarObjectsFromNames(processedCarNames);

      const inputTryCount = await userInputTryCount();

      const tryCount = Number(inputTryCount);
      validateTryCount(tryCount);

      printToStartGame();
      for (let i = 0; i < tryCount; i++) {
        moveCars(cars);
        printRoundStatus(cars);
      }

      const maxPosition = getMaxPosition(cars);

      const result = filterCarsByMaxPosition(cars, maxPosition);

      const winners = extractCarNames(result);
      printWinners(winners);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
