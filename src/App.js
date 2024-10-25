import { joinByComma } from './utils/stringUtils.js';
import Car from './car/Car.js';
import RacingGame from './racingGame/RacingGame.js';
import { printKeyValueFormat } from './utils/ioModule.js';
import { PRINT_MESSAGES } from './constants/messages.js';
import getValidatedCarNames from './functions/getValidatedCarNames.js';
import getValidatedTryCount from './functions/getValidatedTryCount.js';

class App {
  async run() {
    const carNamesArray = await getValidatedCarNames();
    const tryCount = await getValidatedTryCount();

    const racingCars = carNamesArray.map((name) => new Car(name));
    const racingGame = new RacingGame(racingCars, Number(tryCount));
    racingGame.play();
    const winners = racingGame.getWinnerNames();
    printKeyValueFormat(PRINT_MESSAGES.OUTPUT.WINNER, joinByComma(winners));
  }
}

export default App;
