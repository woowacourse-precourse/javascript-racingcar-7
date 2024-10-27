import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  // 4 이상일 때 위치 증가
  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) this.position += 1;
  }

  // 현재 위치 출력
  viewPosition() {
    return `${this.name} : ${'-'.repeat(this.position)}`;
  }
}

export default Car;
