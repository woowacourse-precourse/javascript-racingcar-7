import { Random } from '@woowacourse/mission-utils';

export class Car {
  #carName; // private 필드
  #position; // private 필드

  constructor(carName) {
    this.#carName = carName;
    this.#position = 0;
  }

  // carName에 대한 getter
  get carName() {
    return this.#carName;
  }

  // carName에 대한 setter
  set carName(newName) {
    if (typeof newName === 'string' && newName.trim() !== '') {
      this.#carName = newName;
    } else {
      throw new Error('유효하지 않은 이름입니다.');
    }
  }

  // position에 대한 getter (position은 외부에서 직접 수정하지 않으므로 setter는 필요하지 않음)
  get position() {
    return this.#position;
  }

  moveForward() {
    if (Random.pickNumberInRange(1, 10) >= 4) {
      this.#position += 1;
    }
  }

  getPositionString() {
    if (this.#position === 0) return '';
    return '-'.repeat(this.#position);
  }

  toString() {
    return `${this.carName} : ${this.getPositionString()}`;
  }
}
