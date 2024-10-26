import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name, move) {
    this.name = name;
    this.move = move;
  }

  moveCar() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if (number >= 4) this.move += 1;
  }
}

export default Car;
