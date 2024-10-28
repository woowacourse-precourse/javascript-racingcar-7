export default class Car {
  constructor(name) {
    this.validate(name);
    this.name = name;
    this.position = 0;
  }

  validate(name) {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
  }

  move(number) {
    if (number >= 4) {
      this.position += 1;
    }
  }

  getStatus() {
    return `${this.name} : ${'-'.repeat(this.position)}`;
  }
}
