import { Random } from '@woowacourse/mission-utils';

export class Car {
  constructor(name, number) {
    (this.name = name), (this.number = number);
  }

  move() {
    let randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      this.number += 1;
    }
  }
}
