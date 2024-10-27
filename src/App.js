import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Validator from './Validator.js';
import RacingGame from './RacingGame.js';
import { INPUT_PROMPT } from './Constants.js';

class App {
  async run() {
    try {
      const validator = new Validator();

      const inputCarNames = await Console.readLineAsync(INPUT_PROMPT.CAR_NAMES);
      validator.validateName(inputCarNames);

      const cars = inputCarNames
        .split(',')
        .map(carName => new Car(carName.trim()));

      const inputMoveAttempts = await Console.readLineAsync(
        INPUT_PROMPT.MOVE_ATTEMPTS,
      );
      validator.validateMoveAttempts(inputMoveAttempts);

      const moveAttempts = Number(inputMoveAttempts);

      const game = new RacingGame(cars, moveAttempts);
      game.play();
      game.printResult();
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
