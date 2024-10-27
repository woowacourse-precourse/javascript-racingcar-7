import getRandomNumber from './utils/getRandomNumber.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  isMove() {
    return getRandomNumber() >= 4;
  }

  moveForward() {
    if (this.isMove()) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}

export default Car;
