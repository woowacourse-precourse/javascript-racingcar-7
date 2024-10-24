import { Random } from "@woowacourse/mission-utils";

export default class CarRacingModel {}

class Car {
  constructor(carName) {
    this.carName = carName;
    this.distance = 0;
  }

  move() {
    if (this.getRandomNumber() >= 4) {
      this.distance += 1;
    }
  }

  getRandomNumber() {
    return Random.pickNumberInRange(1, 9);
  }

  moveProgress() {
    return "-".repeat(this.distance);
  }
}
