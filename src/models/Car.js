import { Console } from '@woowacourse/mission-utils';

class Car {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  move() {
    const randomNumber = Console.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += randomNumber;
    }
  }
}

export default Car;
