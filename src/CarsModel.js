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
    for (const [carName, carMoveCount] of this.#carsMap) {
      const randomNum = MissionUtils.Random.pickNumberInRange(
        RULES.RANDOM_MIN,
        RULES.RANDOM_MAX,
      );
      if (randomNum >= RULES.MOVE_THRESHOLD) {
        this.#carsMap.set(carName, carMoveCount + 1);
      }
    }
  }

  getWinners() {
    const winningMoveCount = Math.max(...this.#carsMap.values());
    const winners = [];
    for (const [carName, carMoveCount] of this.#carsMap) {
      if (carMoveCount === winningMoveCount) winners.push(carName);
    }
    return winners;
  }
}

export default CarsModel;
