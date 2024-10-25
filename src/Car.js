import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    if(MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.distance++;
    }
  }

  getInfo() {
    return {
      name: this.name,
      moveDistance: this.distance,
    };
  }
}

export default Car;