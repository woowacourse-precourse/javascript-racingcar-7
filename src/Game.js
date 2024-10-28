import Car from './Car.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import { splitCarNames } from './utils/splitCarNames.js';
import { validateCarName, validateRoundCount } from './validate.js';

class Game {
  #round;

  constructor() {
    this.cars = [];
    this.#round = 0;
  }

  #createCars(inputCarNames) {
    const carNames = splitCarNames(inputCarNames);

    return carNames.map((carName) => new Car(carName));
  }

  async start() {
    const inputCarNames = await InputView.readCarNames();
    validateCarName(inputCarNames);
    const roundCount = await InputView.readRoundCount();
    validateRoundCount(roundCount);

    this.#round = roundCount;
    this.cars = this.#createCars(inputCarNames);

    OutputView.printEmptyLine();
    this.#progress();
  }

  #progress() {
    let currentRound = 0;

    while (currentRound < this.#round) {
      if (currentRound === 0) OutputView.printExecutionResultMessage();

      this.cars.map((car) => {
        car.runRound();
        const [name, forwardCount] = [car.name, car.forwardCount];
        OutputView.printCurrentCarInfo(name, forwardCount);
      });

      OutputView.printEmptyLine();

      currentRound += 1;
    }

    this.#end();
  }

  #end() {
    const winners = this.getWinners();

    OutputView.printWinners(winners);
  }

  #getCardAdvances() {
    return this.cars.map((car) => car.forwardCount);
  }

  #getMaxForwardCount(carAdvances) {
    return Math.max(...carAdvances);
  }

  getWinners() {
    const carAdvances = this.#getCardAdvances();
    const maxForwardCount = this.#getMaxForwardCount(carAdvances);

    return this.cars.filter((car) => car.forwardCount === maxForwardCount).map((winner) => winner.name);
  }
}

export default Game;
