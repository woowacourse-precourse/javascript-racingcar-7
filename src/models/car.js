// car 객체를 생성

import { Random } from "@woowacourse/mission-utils";

const Car = {
  name: "",
  position: 0,

  init(name) {
    this.name = name;
    this.position = 0;
    return this;
  },

  tryToMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += 1;
    }
  },

  getPosition() {
    return this.position;
  },

  getName() {
    return this.name;
  },
};

export default Car;
