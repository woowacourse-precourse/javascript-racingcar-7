import Car from './model/Car.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import { CONFIG } from './constant/config.js';
import { INPUT_MESSAGE } from './constant/message.js';
import { getRandomNumber } from './util/random.js';
import { validateCarNamesInput, validateTurnCount } from './util/validation.js';

class App {
  constructor() {
    this.carList = [];
    this.position = 0;
  }

  async run() {
    const carNames = await InputView.readCarName(
      INPUT_MESSAGE.CAR_NAME_LIST_INPUT
    );
    validateCarNamesInput(carNames);

    const turnCount = await InputView.readTurnCount(
      INPUT_MESSAGE.TURN_COUNT_INPUT
    );
    validateTurnCount(turnCount);

    this.createCars(carNames);
    this.tryToMoveCars(turnCount);
    this.determineWinners();
  }

  createCars(carNames) {
    this.carList = carNames.map((name) => new Car(name));
  }

  moveCars() {
    this.carList.forEach((car) => {
      const randomValue = getRandomNumber(
        CONFIG.MIN_RANDOM_NUMBER,
        CONFIG.MAX_RANDOM_NUMBER
      );
      car.tryToMoveForward(randomValue);
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
