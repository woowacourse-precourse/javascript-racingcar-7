class Car {
  constructor(name) {
    if (name.length > 5) {
      throw new Error('[ERROR]'); // 이름 길이가 5자를 초과하면 에러 발생
    }
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position++; // 자동차의 위치를 1 증가시킴
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}

export default Car;
