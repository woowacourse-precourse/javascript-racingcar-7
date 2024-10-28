import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  // 자동차 전진 여부 결정
  move() {
    const RANDOMNUM = Random.pickNumberInRange(0, 9);
    if (RANDOMNUM >= 4) {
      this.position += 1;
    }
  }
}

export default Car;
