class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  moveCar(number) {
    if (number >= 4) {
      this.position += 1;
    }
  }

  // 현재 자동차의 상태를 리턴하는 메서드
  getCurrentStatus() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

export default Car;
