import { Console, Random } from '@woowacourse/mission-utils';

const getRandomSingleDigit = () => {
  return Random.pickNumberInRange(0, 9);
};

class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  canMoveForward(number) {
    return number >= 4;
  }

  moveForward() {
    this.score += 1;
  }

  printScore() {
    Console.print(`${this.name} : ${'-'.repeat(this.score)}`);
  }

  attemptMove() {
    const randomNumber = getRandomSingleDigit();
    if (this.canMoveForward(randomNumber)) {
      this.moveForward();
    }

    this.printScore();
  }
}

export default Car;
