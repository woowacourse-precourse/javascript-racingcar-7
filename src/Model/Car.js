export default class Car {
  #name;

  #moveCount;

  constructor(name) {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }

    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getMoveCount() {
    return this.#moveCount;
  }

  move() {
    this.#moveCount += 1;
  }
}
