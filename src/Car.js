import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.validateName(name);
    this.name = name;
    this.position = '';
  }

  validateName(name) {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하이어야 합니다.');
    }
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += '-';
    }
  }

  getStatus() {
    return `${this.name} : ${this.position}`;
  }

  getPositionLength() {
    return this.position.length;
  }
}

export default Car;
