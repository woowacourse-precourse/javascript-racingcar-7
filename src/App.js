import InputHandler from "./InputHandler.js";
import RacingGame from "./controller/racingGame.js";
import { validateCars, validateTryNumber} from "./validator/InputValidator.js";

class App {
  async run() {
    try {
      const cars = await InputHandler.getCarNames();
      const tryNumber = await InputHandler.getTryNumber();

      const carList = validateCars(cars);
      const validatedTryNumber = validateTryNumber(tryNumber);

      const game = new RacingGame(carList, validatedTryNumber);
      game.start();
    }

    catch (error) {
      throw(error);
    }
  }

}

export default App;
