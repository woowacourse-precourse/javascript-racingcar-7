import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const value = Random.pickNumberInRange(0, 9);

    if (value >= 4) {
      this.position++;
    }
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  getState() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

export default Car;
