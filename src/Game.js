import Car from './Car.js';
import InputView from './InputView.js';
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

    this.progress();
  }

  progress() {
    // 라운드 진행
  }

  end() {
    // 게임 종료
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
