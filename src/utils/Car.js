import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = '';
  }

  getRandomNum() {
    const num = MissionUtils.Random.pickNumberInRange(0, 9);
    return num;
  }

  move() {
    const randomNumber = this.getRandomNum();
    if (randomNumber >= 4) {
      this.position += '-';
    }
  }

  getPosition() {
    return `${this.name} : ${this.position}`;
  }
}
export default Car;
