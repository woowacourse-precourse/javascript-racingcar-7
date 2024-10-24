import getRandomNum from '../utils/getRandomNum.js';

class Car {
  constructor(name, moveCount = 0) {
    this.name = name;
    this.moveCount = moveCount;
  }

  getName() {
    return this.name;
  }

  getMoveCount() {
    return this.moveCount;
  }

  move() {
    if (getRandomNum() >= 4) {
      this.moveCount += 1;
    }
  }
}

export default Car;
