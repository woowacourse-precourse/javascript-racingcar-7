import InputView from './view/InputView.js';
import CarRace from './CarRace.js';
import CarFactory from './factory/CarFactory.js';
import OutputView from './view/OutputView.js';

class App {

  async run() {
    const carNames = await InputView.getCarNames();
    const attempts = await InputView.getAttempts();
    const cars = CarFactory.createBulkRacingCarFromPlainText(carNames);
    const race = new CarRace(cars);
    await race.start(attempts);
    await OutputView.printWinner(cars);
  }
}


export default App;