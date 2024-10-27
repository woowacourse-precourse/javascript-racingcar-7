import { carNameParser, randomNumber } from "../utils/index.js";
import { validateCarNames } from "../validation/validateCarName.js";
import { RULES } from "../constants/index.js";

import { Car } from "./car.js";

export class RacingGame {
  #cars;
  #tryCount;

  constructor(carNames) {
    const parsedNames = carNameParser(carNames);
    validateCarNames(parsedNames);
    this.#cars = parsedNames.map((name) => new Car(name));
  }

  setTryCount(count) {
    const tryCount = Number(count);
    this.#tryCount = tryCount;
  }

  playRound() {
    this.#cars.forEach((car) => {
      const number = randomNumber(
        RULES.RANDOM_MIN_NUMBER,
        RULES.RANDOM_MAX_NUMBER
      );
      if (this.#shouldProgress(number)) {
        car.moveForward();
      }
    });
  }

  #shouldProgress(number) {
    return number >= RULES.MIN_PROGRESS_STEPS;
  }

  getCars() {
    return this.#cars;
  }

  getTryCount() {
    return this.#tryCount;
  }

  getWinners() {
    const maxPosition = Math.max(
      ...this.#cars.map((car) => car.getCarPosition())
    );

    return this.#cars
      .filter((car) => car.getCarPosition() === maxPosition)
      .map((car) => car.getCarName());
  }
}
