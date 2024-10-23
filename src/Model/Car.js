import { Random } from '@woowacourse/mission-utils';

export class Car {
  #carName;

  #position;

  static MIN_MOVE_THRESHOLD = 4;

  static MAX_RANDOM_VALUE = 10;

  constructor(carName) {
    if (typeof carName !== 'string') {
      throw new Error('유효하지 않은 이름입니다.');
    }
    this.#carName = carName;
    this.#position = 0;
  }

  get carName() {
    return this.#carName;
  }

  get position() {
    return this.#position;
  }

  moveForward() {
    if (
      Random.pickNumberInRange(0, Car.MAX_RANDOM_VALUE) >=
      Car.MIN_MOVE_THRESHOLD
    ) {
      this.#position += 1;
    }
  }

  getPositionString() {
    return '-'.repeat(this.#position); // 위치가 0일 경우에도 빈 문자열을 반환함
  }

  toString() {
    return `${this.#carName} : ${this.getPositionString()}`;
  }
}
