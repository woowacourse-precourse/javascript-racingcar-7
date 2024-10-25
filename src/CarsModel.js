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

  #isCarMove() {
    const randomNum = MissionUtils.Random.pickNumberInRange(
      RULES.RANDOM_MIN,
      RULES.RANDOM_MAX,
    );

    if (randomNum >= RULES.MOVE_THRESHOLD) return true;
    return false;
  }

  moveCars() {
    this.#carsMap.forEach((carMoveCount, carName) => {
      if (this.#isCarMove()) this.#carsMap.set(carName, carMoveCount + 1);
    });
  }

  getWinners() {
    const winningMoveCount = Math.max(...this.#carsMap.values());

    const winners = [];
    this.#carsMap.forEach((carMoveCount, carName) => {
      if (carMoveCount === winningMoveCount) winners.push(carName);
    });

    return winners;
  }
}

export default CarsModel;
