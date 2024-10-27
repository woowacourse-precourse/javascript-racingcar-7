import Car from "./Car.js";
import { Random } from "@woowacourse/mission-utils";

export default class RaceManager {
  #cars = [];
  #attempts = 0;

  createCars(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  setAttempts(attempts) {
    this.#attempts = attempts;
  }

  moveAllCars() {
    this.#cars.forEach((car) => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        car.move();
      }
    });
  }

  getCars() {
    return this.#cars;
  }

  getAttempts() {
    return this.#attempts;
  }
}
