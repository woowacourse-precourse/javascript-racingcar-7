import Car from './Car.js';
import ViewIn from './view/ViewIn.js';
import ViewOut from './view/ViewOut.js';
import { parseCars } from './utils/parser.js';
import { validateCars } from './utils/validator/car.js';
import { validateCount } from './utils/validator/count.js';
import { Random } from '@woowacourse/mission-utils';
import { THRESHOLD } from './constants/threshold.js';

export default class Race {
  #cars;
  #count;
  #winner;

  async init() {
    const cars = await ViewIn.getCars();
    const count = await ViewIn.getCount();

    const carsArray = parseCars(cars);

    validateCars(carsArray);
    validateCount(count);

    this.#cars = carsArray.map(name => new Car(name));
    this.#count = count;
  }

  start() {
    ViewOut.showResultMessage();
    this.#round();
    this.#selectWinner();
    console.log(this.#winner);
  }

  #round() {
    for (let i = 0; i < this.#count; i++) {
      this.#race();
      ViewOut.showRaceStatus(this.#cars);
    }
  }

  #race() {
    this.#cars.forEach(car => {
      const randomNumber = Random.pickNumberInRange(THRESHOLD.MIN_RANDOM_NUMBER,
        THRESHOLD.MAX_RANDOM_NUMBER);
      car.move(randomNumber);
    });
  }

  #selectWinner() {
    this.#sortScore();
    const highScore = this.#cars[0].getPoints();
    this.#winner = this.#cars.filter((car) => car.getPoints() === highScore);
  }

  #sortScore() {
    this.#cars.sort((n, m) => m.getPoints() - n.getPoints());
  }
}