// 자동차 클래스

import { ERROR_MESSAGES } from "./constants.js";

class Car {
  constructor(name) {
    this.validateName(name); // 이름 유효성 검증 후 이름 설정
    this.name = name;
    this.position = 0; // 초기 위치
  }

  validateName(name) {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME);
    }
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }

  getDisplayPosition() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

export default Car;