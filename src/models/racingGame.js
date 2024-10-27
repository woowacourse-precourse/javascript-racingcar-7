import { carNameParser } from "../utils/index.js";
import { validateCarNames } from "../validation/validateCarName.js";

import { Car } from "./car.js";

export class RacingGame {
  #cars;
  #tryCount;

  constructor(carNames, tryCount) {
    this.#validateInputs(carNames);
    this.#cars = this.#createCars(carNames);
    this.#tryCount = Number(tryCount);
  }

  #validateInputs(carNames) {
    const parsedNames = carNameParser(carNames);
    validateCarNames(parsedNames);
  }

  #createCars(carNames) {
    const parsedNames = carNameParser(carNames);
    return parsedNames.map((name) => new Car(name));
  }

  getCars() {
    return this.#cars;
  }

  getTryCount() {
    return this.#tryCount;
  }
}
