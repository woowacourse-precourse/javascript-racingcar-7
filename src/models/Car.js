import { PROGRESS } from "../config/config.js";

export class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  moveForward() {
    this.forwardCount += 1;
  }

  getStatus() {
    const progress = PROGRESS.repeat(this.forwardCount);
    return `${this.name} : ${progress}`;
  }
}
