import { nameLimit5 } from './Constants.js';
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
    nameLimit5(this.name);
    return this.name;
  }
}
