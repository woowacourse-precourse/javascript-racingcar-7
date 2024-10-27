import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Game {
  #cars;
  #count;

  constructor(carNames, count) {
    this.#cars = this.#createCars(carNames);
    this.#count = count;
  }

  #createCars(carNames) {
    return carNames.map((name) => new Car(name));
  }

  play(callback) {
    for (let i = 0; i < this.#count; i++) {
      this.#moveCars();
      callback(this.#cars);
    }
  }

  #moveCars() {
    this.#cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      car.move(randomNumber);
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    return this.#cars.filter((car) => car.getPosition() === maxPosition);
  }
}

export default Game;
