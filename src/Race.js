import { MIN_MOVE_THRESHOLD } from "./Constants.js";
import { Console, Random } from "@woowacourse/mission-utils";

class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
    this.carPositions = this.initializeCarPositions(cars);
  }

  initializeCarPositions(cars) {
    const carPositions = {};
    cars.forEach((car) => {
      carPositions[car] = "";
    });
    return carPositions;
  }

  canMoveToForward(num) {
    return num >= MIN_MOVE_THRESHOLD;
  }

  startRace() {
    let attempt = 0;
    while (attempt < this.tryCount) {
      this.cars.forEach((car) => {
        if (this.canMoveToForward(Random.pickNumberInRange(0, 9))) {
          this.carPositions[car] += "-";
        }
        Console.print(`${car} : ${this.carPositions[car]} \n`);
      });
      Console.print("\n");
      attempt++;
    }
  }
}

export default Race;
