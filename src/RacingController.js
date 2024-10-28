import Car from './Car.js';
import IOProcessor from './IOProcessor.js';
import { OUTPUT_MESSAGE, DELEMETER } from './constants.js';

/**
 *
 */
class RacingController {
  #cars;
  #count;

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
    this.#count = count;
  }

  /**
   *
   */
  run() {
    this.ioProcessor.processOutput(OUTPUT_MESSAGE.RESULT);

    for (let i = 0; i < this.#count; i++) {
      this.#cars.forEach((car) => car.accelerate());
      this.#cars.forEach((car) => car.printStatus());
      this.ioProcessor.processOutput('');
    }

    this.printWinners();
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
  printWinners() {
    const winners = this.calculateWinners();
    const winnerNames = winners
      .map((winner) => winner.getName())
      .join(DELEMETER.concat(' '));
    this.ioProcessor.processOutput(OUTPUT_MESSAGE.WINNER.concat(winnerNames));
  }
}

export default RacingController;
