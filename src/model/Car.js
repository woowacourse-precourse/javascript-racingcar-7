import { MissionUtils } from "@woowacourse/mission-utils";

export default class Car {
  name;

  dist;

  constructor(name) {
    this.name = name;
    this.dist = 0;
  }

  move() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if (number >= 4) this.dist += 1;
  }
}
