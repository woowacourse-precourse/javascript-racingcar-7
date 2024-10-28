import { MissionUtils } from "@woowacourse/mission-utils";

export default class Car {
  constructor(carName) {
    this.carName = carName;
    this.carMoveLength = "";
  }

  moveCar() {
    const isMove = MissionUtils.Random.pickNumberInRange(0, 9);
    if (isMove >= 4) {
      this.carMoveLength += "-";
    }
  }
}
