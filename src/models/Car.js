import { Random } from '@woowacourse/mission-utils';

export default class Car {
  #name;
  #position = 0;
  #generator;

  static MOVE_SPEED = 1;
  static MOVE_THRESHOLD = 4;

  constructor(name, generator = () => Random.pickNumberInRange(0, 9)) {
    this.#name = name;
    this.#generator = generator;
  }

  #shouldMove() {
    return this.#generator() >= Car.MOVE_THRESHOLD;
  }

  #calculateMovement() {
    this.#position += Car.MOVE_SPEED;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  move() {
    if (this.#shouldMove()) {
      this.#calculateMovement();
    }

    return this.#position;
  }
}
