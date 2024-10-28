import { generateRandomNumber } from './utils/index.js';

class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  move() {
    const result = generateRandomNumber();
    const isMovingForward = result >= 4;
    if (isMovingForward) {
      this.score += 1;
    }
  }

  record() {
    return `${this.name} : ${'-'.repeat(this.score)}`;
  }
}

export default Car;
