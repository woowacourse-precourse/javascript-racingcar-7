class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
    this.validateName(name);
  }

  validateName(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.");
    }
    if (!name || name.trim().length === 0) {
      throw new Error("[ERROR] 자동차 이름은 공백일 수 없습니다.");
    }
  }

  moveCar(number) {
    if (number >= 4) {
      this.position += 1;
    }
  }
}

export default Car;
