import { Random, Console } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  // 0-9 사이의 랜덤 숫자가 4 이상이면 전진
  move() {
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.position += 1;
    }
  }

  // 현재 자동차의 상태 출력
  printPosition() {
    Console.print(`${this.name} : ${'-'.repeat(this.position)}`);
  }
}

export default Car;
