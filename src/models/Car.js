import { getRandomNumber } from '../utils/getRandomNumber.js';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    if (getRandomNumber() >= 4) {
      this.distance += 1;
    }
  }

  getDistance() {
    return this.distance;
  }
}

export default Car;
