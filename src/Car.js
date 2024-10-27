// Car.js
import { Console } from "@woowacourse/mission-utils";

export class Car {
  constructor(name) {
    this.validate(name);
    this.name = name;
    this.position = 0;
  }

  validate(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
    if (name.trim().length === 0) {
      throw new Error("[ERROR] 자동차 이름은 빈 값일 수 없습니다.");
    }
  }

  move() {
    if (shouldMoveForward()) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }

  printStatus() {
    Console.print(`${this.name} : ${"-".repeat(this.position)}`);
  }
}
