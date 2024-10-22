import { Random } from '@woowacourse/mission-utils';
export class Car {
  constructor(carName) {
    this.carName = carName;
    this.position = 0; // 'move' 대신 'position' 등으로 변경
  }

  moveForward() {
    if (Random.pickNumberInRange(1, 10) > 4) {
      this.position += 1; // 'this'를 사용하여 접근
    }
  }

  get currentPosition() {
    // 'move' 대신 다른 이름을 사용
    return this.position;
  }

  getPositionString(position) {
    if (position === 0) return '';
    return this.position * '-';
  }

  toString() {
    console.log(`${this.carName} : ${this.getPositionString(this.position)}`);
  }
}
