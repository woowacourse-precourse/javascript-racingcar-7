import { MissionUtils } from "@woowacourse/mission-utils";
import RULES from "./constants/rule.js";

class CarsModel {
  #carsMap;

  constructor(input) {
    const cars = input.split(",");
    this.#carsMap = new Map(cars.map((car) => [car.trim(), 0]));
  }

  getCarNames() {
    return [...this.#carsMap.keys()];
  }

  getCarsMap() {
    return this.#carsMap;
  }

  moveCars() {
    for (const [carName, carCount] of this.#carsMap) {
      const randomNum = MissionUtils.Random.pickNumberInRange(
        RULES.RANDOM_NUM_MIN,
        RULES.RANDOM_NUM_MAX
      );
      if (randomNum >= RULES.MOVE_THRESHOLD) {
        this.#carsMap.set(carName, carCount + 1);
      }
    }
  }

  getWinners() {
    const winningLength = Math.max(...this.#carsMap.values());
    const winnerCars = [];
    for (const [carName, carCount] of this.#carsMap) {
      if (carCount === winningLength) winnerCars.push(carName);
    }
    return winnerCars;
  }
}

export default CarsModel;
