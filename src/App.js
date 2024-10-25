import { joinByComma } from './utils/stringUtils.js';
import Car from './car/Car.js';
import Game from './racingGame/RacingGame.js';
import { getUserInput, printCarsMoving } from './utils/ioModule.js';
import {
  validateForRacingCars,
  validateForTryCount,
} from './validator/validatePipeline.js';

class App {
  async run() {
    const inputForRacingCars = await getUserInput('입력');
    const carNamesArray = validateForRacingCars(inputForRacingCars);
    const inputForTryCount = await getUserInput('시도할 횟수를 입력하세요');
    validateForTryCount(inputForTryCount);

    const racingCars = carNamesArray.map((name) => new Car(name));
    const game = new Game(racingCars, Number(inputForTryCount));
    game.play();
    const winners = game.getWinnerNames();
    printCarsMoving('최종 우승자', joinByComma(winners));
  }
}

export default App;
