import InputView from './view/InputView.js';
import Cars from './domain/Cars.js';
import NumberOfTry from './domain/NumberOfTry.js';
import MovingForward from './domain/MovingForward.js';
import Winners from './domain/Winners.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    const inputCars = await InputView.readCars();
    const initialCars = new Cars(inputCars).getCars();
    const inputNumber = await InputView.readNumber();
    const numberOfTry = new NumberOfTry(inputNumber).getNumberOfTry();
    const result = new MovingForward(initialCars, numberOfTry).getMoveResults();
    const { cars, progress } = result;
    const winners = new Winners(cars).getWinners();

    OutputView.printProgress(progress);
    OutputView.printWinners(winners);
  }
}

export default App;
