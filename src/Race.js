import { Console } from '@woowacourse/mission-utils';
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

  #runRounds() {
    for (let i = 0; i < this.#roundCount; i++) {
      this.#moveCars();
      this.#printRoundResult();
    }
  }

  start() {
    Console.print('\n실행 결과');
    this.#runRounds();
  }
}

export default Race;
