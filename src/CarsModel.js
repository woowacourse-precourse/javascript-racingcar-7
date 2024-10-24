import { MissionUtils } from "@woowacourse/mission-utils";

class CarsModel {
  #carsMap;

  constructor(input) {
    const cars = input.split(",");
    this.#carsMap = new Map(cars.map((car) => [car, 0]));
  }

  getCarNames() {
    return [...this.#carsMap.keys()];
  }

  getCarsMap() {
    return this.#carsMap;
  }

  moveCars() {
    for (const [carName, carCount] of this.#carsMap) {
      const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
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
