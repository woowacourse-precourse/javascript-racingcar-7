import { MissionUtils } from "@woowacourse/mission-utils";

export class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  plusCnt() {
    const randomNumer = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumer >= 4) {
      this.moveCount++;
    }
  }
}
