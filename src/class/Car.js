import { MyUtils, UserInterface } from './index.js';

class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  attemptMove() {
    const randomNumber = MyUtils.getRandomSingleDigit();
    if (this.canMoveForward(randomNumber)) {
      this.moveForward();
    }

    this.printScore();
  }

  canMoveForward(number) {
    return number >= 4;
  }

  moveForward() {
    this.score += 1;
  }

  printScore() {
    UserInterface.print(`${this.name} : ${'-'.repeat(this.score)}`);
  }
}

export default Car;
