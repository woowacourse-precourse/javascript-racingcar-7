import getRandomNum from '../utils/getRandomNum.js';
import {
  MIN_MOVABLE_NUM,
  MOVE_INCREMENT,
  INIT_NUM,
} from '../constants/constants.js';

class Car {
  constructor(name, moveCount = INIT_NUM) {
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
    if (getRandomNum() >= MIN_MOVABLE_NUM) {
      this.moveCount += MOVE_INCREMENT;
    }
  }
}

export default Car;
