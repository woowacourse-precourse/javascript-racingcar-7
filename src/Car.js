class Car {
  constructor(name) {
    this.validateName(name);
    this.name = name;
    this.position = 0;
  }

  validateName(name) {
    if (!name || name.trim().length === 0) {
      throw new Error('[ERROR] 자동차 이름은 빈 값일 수 없습니다.');
    }
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.');
    }
  }

  move(number) {
    if (number >= 4) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}

export default Car;
