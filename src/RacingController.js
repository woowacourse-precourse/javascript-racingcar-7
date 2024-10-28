import Car from './Car.js';
import IOProcessor from './IOProcessor.js';
import { OUTPUT_MESSAGE, DELEMETER, ERROR_MESSAGE } from './constants.js';

/**
 *
 */
class RacingController {
  #cars;
  #count;

  /**
   *
   */
  run(carsString, count) {
    this.setCars(carsString);
    this.validateDuplicateCarName();
    this.setCount(count);

    this.ioProcessor.processOutput('');
    this.ioProcessor.processOutput(OUTPUT_MESSAGE.RESULT);
    this.race();

    const winners = this.calculateWinners();
    this.printWinners(winners);
  }

  /**
   *
   */
  setCars(cars) {
    this.ioProcessor = new IOProcessor();
    this.#cars = cars.map((car) => new Car(car));
  }

  /**
   *
   */
  setCount(count) {
    if (!Number.isInteger(Number(count)) || count <= 0) {
      throw new Error(ERROR_MESSAGE.INVALID_COUNT);
    }

    this.#count = count;
  }

  /**
   *
   */
  validateDuplicateCarName() {
    const carNames = this.#cars.map((car) => car.getName());
    const uniqueCarNames = new Set(carNames);

    if (carNames.length !== uniqueCarNames.size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
    }
  }

  /**
   *
   */
  race() {
    for (let i = 0; i < this.#count; i++) {
      this.#cars.forEach((car) => car.accelerate());
      this.#cars.forEach((car) => car.printStatus());
      this.ioProcessor.processOutput('');
    }
  }

  /**
   *
   */
  calculateWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    return this.#cars.filter((car) => car.getPosition() === maxPosition);
  }

  /**
   *
   */
  printWinners(winners) {
    const winnerNames = winners
      .map((winner) => winner.getName())
      .join(DELEMETER.concat(' '));

    this.ioProcessor.processOutput(OUTPUT_MESSAGE.WINNER.concat(winnerNames));
  }
}

export default RacingController;
