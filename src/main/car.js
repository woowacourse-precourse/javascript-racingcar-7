import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  getCarName() {
    return this.name;
  }

  getForwardCount() {
    return this.forwardCount;
  }

  moveForward() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (4 <= randomNumber) {
      this.forwardCount += 1;
    }
  }
}

export default Car;
