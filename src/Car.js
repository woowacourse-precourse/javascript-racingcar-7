import { Random } from '@woowacourse/mission-utils';

export class Car {
  constructor(carName) {
    this.carName = carName; // 공개 필드로 처리
    this.position = 0; // 공개 필드로 처리
  }

  moveForward() {
    if (Random.pickNumberInRange(1, 10) >= 4) {
      this.position += 1; // 공개 필드에 직접 접근
    }
  }

  getPositionString() {
    if (this.position === 0) return '';
    return '-'.repeat(this.position); // '-'를 position 값만큼 반복
  }

  toString() {
    return `${this.carName} : ${this.getPositionString()}`; // 문자열 반환
  }
}
