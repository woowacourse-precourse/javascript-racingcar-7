import { validateName } from "./validate.js";
import { Random } from "@woowacourse/mission-utils";

class Car {
  static MOVE_CONDITION = 4;
  constructor(name) {
    this.name = validateName(name);
    this.distance = 0;
  }

  static canMove() {
    return Random.pickNumberInRange(0, 9) >= Car.MOVE_CONDITION;
  }

  move() {
    if (Car.canMove()) {
      return (this.distance += 1);
    }
  }

  getDistance() {
    return this.distance;
  }

  getName() {
    return this.name;
  }
}

export default Car;
