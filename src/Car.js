// Car.js
import { Console } from "@woowacourse/mission-utils";
import { shouldMoveForward } from "./Random.js";

export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
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
