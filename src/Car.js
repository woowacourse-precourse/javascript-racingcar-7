import { getRandomNumber } from './Constants.js';

export class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  move() {
    const randomNumber = getRandomNumber(0, 9);
    if (randomNumber >= 4) {
      this.location++;
    }
  }

  getLocation() {
    return this.location;
  }

  getName() {
    return this.name;
  }
}
