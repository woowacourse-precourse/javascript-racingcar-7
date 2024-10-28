import { Console } from '@woowacourse/mission-utils';
import { RACE_MESSAGES } from './constant.js';
import Car from './Car.js';

class Race {
  #cars;
  #roundCount;

  constructor(carNames, roundCount) {
    this.#cars = carNames.map((name) => new Car(name));
    this.#roundCount = roundCount;
  }

  #moveCars() {
    this.#cars.forEach((car) => car.move());
  }

  #printCarPosition(car) {
    Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  }

  #printRoundResult() {
    this.#cars.forEach((car) => this.#printCarPosition(car));
    Console.print('');
  }

  #getMaxPosition() {
    return Math.max(...this.#cars.map((car) => car.position));
  }

  #getCarsAtPosition(position) {
    return this.#cars.filter((car) => car.position === position);
  }

  #getWinners() {
    const maxPosition = this.#getMaxPosition();
    const winningCars = this.#getCarsAtPosition(maxPosition);

    return winningCars.map((car) => car.name).join(', ');
  }

  #runRounds() {
    for (let i = 0; i < this.#roundCount; i++) {
      this.#moveCars();
      this.#printRoundResult();
    }
  }

  start() {
    Console.print(RACE_MESSAGES.resultTitle);
    this.#runRounds();
  }

  printWinner() {
    const winners = this.#getWinners();
    Console.print(`${RACE_MESSAGES.finalWinner}${winners}`);
  }
}

export default Race;
