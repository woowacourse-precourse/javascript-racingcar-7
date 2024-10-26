import GAME from '../constants/Game.js';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  moveForward(number) {
    if (number >= GAME.moveThreshold) this.moveCount += 1;
  }
}

export default Car;
