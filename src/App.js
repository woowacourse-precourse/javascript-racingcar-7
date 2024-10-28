import InputUtils from "./Utils/InputUtils.js";
import RacingGame from "./controller/racingGame.js";
import InputValidator from "./validator/InputValidator.js"

class App {
  async run() {
    try {
      const cars = await InputUtils.getCarNames();
      const tryNumber = await InputUtils.getTryNumber();

      const carList = InputValidator.validateCars(cars);
      const validatedTryNumber = InputValidator.validateTryNumber(tryNumber);

      const game = new RacingGame(carList, validatedTryNumber);
      game.start();
    }
    
    catch (error) {
      throw(error);
    }
  }

}

export default App;
