import CarFactory from './services/CarFactory.js';
import Race from './services/Race.js';
import RaceResult from './services/RaceResult.js';
import Validator from './utils/Validator.js';
import InputView from './utils/InputView.js';
import OutputView from './utils/OutputView.js';

class App {
  async run() {
    try {
      const carNames = await InputView.readCarNames();
      Validator.validateCarNames(carNames);
      const cars = CarFactory.createCars(carNames);

      const tryCount = await InputView.readTryCount();
      Validator.validateTryCount(tryCount);

      const race = new Race(cars, tryCount);
      race.start();

      RaceResult.printWinners(race.getCars());
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      throw error;
    }
  }
}

export default App;
