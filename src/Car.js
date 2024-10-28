import { nameLimitTest } from './Constants.js';
import { getRandomNumber } from './Constants.js';

export class Car {
  constructor(name) {
    nameLimitTest(name);
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = getRandomNumber(0, 9);
    if (randomNumber >= 4) {
      this.position++;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}
