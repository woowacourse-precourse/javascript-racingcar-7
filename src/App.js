import { joinByComma } from './utils/stringUtils.js';
import Car from './car/Car.js';
import RacingGame from './racingGame/RacingGame.js';
import { getUserInput, printKeyValueFormat } from './utils/ioModule.js';
import { validateTryCount } from './validator/validatePipeline.js';
import { PRINT_MESSAGES } from './constants/messages.js';
import getValidatedCarNames from './functions/getValidatedCarNames.js';

class App {
  async run() {
    const carNamesArray = await getValidatedCarNames();

    const inputForTryCount = await getUserInput(PRINT_MESSAGES.INPUT.TRY_COUNT);
    validateTryCount(inputForTryCount);

    const racingCars = carNamesArray.map((name) => new Car(name));
    const racingGame = new RacingGame(racingCars, Number(inputForTryCount));
    racingGame.play();
    const winners = racingGame.getWinnerNames();
    printKeyValueFormat(PRINT_MESSAGES.OUTPUT.WINNER, joinByComma(winners));
  }
}

export default App;
