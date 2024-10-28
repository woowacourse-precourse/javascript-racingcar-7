export class Car {
  constructor(name) {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
    this.name = name;
    this.position = 0;
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
      this.position++;
    }
  }

  getPosition() {
    return this.position;
  }
}
