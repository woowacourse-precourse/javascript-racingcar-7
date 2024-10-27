import { MissionUtils } from "@woowacourse/mission-utils";

export class Car {
  constructor(carName) {
    this.carName = carName;
    this.position = 0;

    if (this.carName.length() >= 6) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
  }

  move() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.position += 1;
    }
  }
}
