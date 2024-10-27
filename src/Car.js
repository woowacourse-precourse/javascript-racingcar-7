import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = "";
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.position += "-";
    }
  }
}

export default Car;
