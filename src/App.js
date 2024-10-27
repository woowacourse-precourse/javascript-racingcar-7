import Car from './Car.js';
import Validator from './Validator.js';
import RacingGame from './RacingGame.js';
import InputHandler from './InputHandler.js';

class App {
  async run() {
    try {
      const validator = new Validator();
      const inputHandler = new InputHandler();

      const inputCarNames = await inputHandler.readCarNames();
      validator.validateName(inputCarNames);

      const cars = inputCarNames
        .split(',')
        .map(carName => new Car(carName.trim()));

      const inputMoveAttempts = await inputHandler.readMoveAttpes();
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
