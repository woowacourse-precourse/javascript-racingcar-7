import { splitByComma, joinByComma } from './utils/stringUtils.js';
import Car from './car/Car.js';
import Game from './racingGame/RacingGame.js';
import { getUserInput, printCarsMoving } from './utils/ioModule.js';
import {
  validateCarNames,
  validateRacingCarInput,
  validateTryCount,
} from './validator/validatePipeline.js';
import { PRINT_MESSAGES } from './constants/messages.js';

class App {
  async run() {
    const inputForRacingCars = await getUserInput(
      PRINT_MESSAGES.INPUT.CAR_NAME,
    );
    validateRacingCarInput(inputForRacingCars);
    const carNamesArray = splitByComma(inputForRacingCars);
    validateCarNames(carNamesArray);
    const inputForTryCount = await getUserInput(PRINT_MESSAGES.INPUT.TRY_COUNT);
    validateTryCount(inputForTryCount);

    const racingCars = carNamesArray.map((name) => new Car(name));
    const game = new Game(racingCars, Number(inputForTryCount));
    game.play();
    const winners = game.getWinnerNames();
    printCarsMoving(PRINT_MESSAGES.OUTPUT.WINNER, joinByComma(winners));
  }
}

export default App;
