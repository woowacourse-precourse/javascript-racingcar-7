import { CONSTANTS } from "../utils/constants.js";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  moveCar(number) {
    if (number >= CONSTANTS.MOVE_CONDITION) {
      this.position += CONSTANTS.MOVE_FORWARD_COUNT;
    }
  }

  // 현재 자동차의 상태를 리턴하는 메서드
  getCurrentStatus() {
    return `${this.name} : ${CONSTANTS.MOVE_FORWARD_MARKER.repeat(
      this.position
    )}`;
  }
}

export default Car;
