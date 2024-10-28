import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class RacingGame {
  #tryCount;
  #carNames;
  #cars = [];

  constructor(tryCount, carNames) {
    this.#tryCount = tryCount;
    this.#carNames = [...carNames];
  }

  getTryCount() {
    return this.#tryCount;
  }
  getCars() {
    return this.#cars;
  }

  makeCar() {
    this.#carNames.forEach((carName) => {
      const car = new Car(carName);
      this.#cars.push(car);
    });
  }

  play() {
    for (let gameRound = 0; gameRound < this.#tryCount; gameRound++) {
      this.#cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        car.move(randomNumber);
        car.saveResult();
      });
    }
  }

  findWinner(winners = []) {
    this.#cars.forEach((car) => {
      if (winners.length === 0) {
        return winners.push(car);
      }

      const maxCar = winners.pop();

      if (car.moveFurtherThan(maxCar)) {
        winners.length = 0;
        winners.push(car);
      } else if (car.moveLessThan(maxCar)) {
        winners.push(maxCar);
      } else {
        winners.push(maxCar, car);
      }
    });

    return winners;
  }
}

export default RacingGame;
