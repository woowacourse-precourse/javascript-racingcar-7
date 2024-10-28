import Car from './model/Car.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  constructor() {
    this.carList = [];
    this.position = 0;
  }

  async run() {
    const carNames = await InputView.readCarName();
    const turnCount = await InputView.readTurnCount();

    this.createCars(carNames);
    this.tryToMoveCars(turnCount);
    this.determineWinners();
  }

  createCars(carNames) {
    this.carList = carNames.map((name) => new Car(name));
  }

  moveCars() {
    this.carList.forEach((car) => {
      car.tryToMoveForward();
      this.position = Math.max(this.position, car.getPosition());
    });
    OutputView.printCarPositions(this.carList);
  }

  tryToMoveCars(turnCount) {
    OutputView.printStartRaceHeader();
    for (let i = 0; i < turnCount; i++) {
      this.moveCars();
    }
  }

  determineWinners() {
    const winners = this.carList
      .filter((car) => car.getPosition() === this.position)
      .map((car) => car.getName());
    OutputView.printRaceWinner(winners);
  }
}

export default App;
