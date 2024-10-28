import Car from './Car.js';
import getMostMovedCar from './utils/getMostMovedCar.js';
import { printMessage } from './utils/inputOutput.js';
import INPUT_OUTPUT_MESSAGES from './constants/inputOutputMessages.js';

class CarRacing {
  #cars;
  #count;

  constructor(cars, count) {
    this.#cars = cars.map((car) => new Car(car));
    this.#count = count;
  }

  start() {
    printMessage(`${INPUT_OUTPUT_MESSAGES.OUTPUT_RESULT}`);

    for (let i = 0; i < this.#count; i++) {
      this.#race();
      this.#printResult();
    }
  }

  #race() {
    this.#cars.forEach((car) => car.moveForward());
  }

  #printResult() {
    this.#cars.forEach((car) =>
      printMessage(`${car.getName()} : ${'-'.repeat(car.getPosition())}`)
    );

    printMessage('');
  }

  printWinner() {
    const winner = getMostMovedCar(this.#cars);
    printMessage(`${INPUT_OUTPUT_MESSAGES.OUTPUT_WINNER}${winner.join(', ')}`);
  }
}

export default CarRacing;
