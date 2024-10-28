import { Random } from "@woowacourse/mission-utils";
import CAR_RACE from "../constants/carRace.js";

export default class CarRace {
  #cars;
  #result;
  constructor(cars) {
    this.#cars = cars;
    this.#result = [];
  }

  get result() {
    return this.#result;
  }

  #getMaxPosition() {
    return Math.max(...this.#cars.map((car) => car.position));
  }

  getWinner() {
    const maxPosition = this.#getMaxPosition();
    return this.#cars.filter((car) => car.position === maxPosition);
  }

  moveCar(carName, randomNumber) {
    const targetCar = this.#cars.find((car) => car.name === carName);
    if (randomNumber >= CAR_RACE.MOVE_THRESHOLD) {
      targetCar.move();
    }
  }

  totalUnitRound(tryCount) {
    for (let i = 0; i < tryCount; i++) {
      this.#gameRound();
      this.#setCurrentRoundResult();
    }
  }

  #gameRound() {
    this.#cars.map((car) => {
      const randomDigitFrom0to9 = Random.pickNumberInRange(
        CAR_RACE.MIN_RANDOM_NUMBER,
        CAR_RACE.MAX_RANDOM_NUMBER
      );
      this.moveCar(car.name, randomDigitFrom0to9);
    });
  }

  #setCurrentRoundResult() {
    const currentRoundResult = this.#cars.map((car) => ({
      name: car.name,
      position: car.position,
    }));
    this.#result.push(currentRoundResult);
  }
}
