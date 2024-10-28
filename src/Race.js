import { Random } from "@woowacourse/mission-utils";
import { RANDOM_MAX, RANDOM_MIN } from "./constants";

class Race {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  generateRandomNumber() {
    return Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
  }

  moveCars() {
    this.cars.forEach((car) => {
      car.move(this.generateRandomNumber());
    });
  }

  findWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  async run(tries) {
    for (let i = 0; i < tries; i++) {
      this.moveCars();
      OutputManager.printRaceStatus(this.cars);
    }
    OutputManager.printWinners(this.findWinners());
  }
}
