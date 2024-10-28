import { Console, MissionUtils } from "@woowacourse/mission-utils";

export default class Car {
  #cars;
  #distance;
  #playCount;

  constructor(cars, playCount) {
    this.#cars = cars;
    this.#playCount = playCount;
    this.#distance = {};
    this.#initCars();
  }

  #initCars() {
    this.#cars.forEach((car) => {
      this.#distance[car] = 0;
    });
  }

  #moveCar() {
    this.#cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        this.#distance[car] += 1;
      }
    });
  }

  #printCurrentDistances() {
    this.#cars.forEach((car) => {
      const distance = "-".repeat(this.#distance[car]);
      Console.print(`${car} : ${distance}`);
    });
    Console.print("");
  }

  startRace() {
    for (let i = 0; i < this.#playCount; i++) {
      this.#moveCar();
      this.#printCurrentDistances();
    }
  }

  getWinners() {
    const maxDistance = Math.max(...Object.values(this.#distance));
    const winners = this.#cars.filter(
      (car) => this.#distance[car] === maxDistance
    );
    return winners;
  }

  getResult() {
    return this.#distance;
  }
}
