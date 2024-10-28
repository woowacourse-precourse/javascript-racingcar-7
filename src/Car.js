import { validateName } from "./validate.js";
import { Random } from "@woowacourse/mission-utils";

class Car {
  static MOVE_CONDITION = 4;
  constructor(name) {
    this.name = validateName(name);
  }

  static canMove() {
    return Random.pickNumberInRange(0, 9) >= Car.MOVE_CONDITION;
  }
}

export default Car;
