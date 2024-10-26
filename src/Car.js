import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name, move) {
    this.name = name;
    this.move = move;
  }

  moveCar() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
  }
}

export default Car;
