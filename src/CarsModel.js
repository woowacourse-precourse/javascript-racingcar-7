import { MissionUtils } from "@woowacourse/mission-utils";

class CarsModel {
  #cars = [];
  #carsMap;

  constructor(input) {
    this.#cars = input.split(",");
    if (!this.#validateCarNames(this.#cars)) throw new Error("[ERROR]");
    this.#carsMap = new Map(this.#cars.map((car) => [car, 0]));
  }

  #validateCarNames(cars) {
    if (!cars.every((car) => car.length <= 5)) return false;
    if (new Set(cars).size !== cars.length) return false;
    if (cars.some((car) => car.trim() === "")) return false;
    return true;
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
