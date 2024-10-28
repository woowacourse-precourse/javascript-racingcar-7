// 자동차 - 이름, 거리
class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0; // 거리 0으로 초기화
  }

  move() {
    this.distance += 1;
  }

  getDistance() {
    return this.distance;
  }
}

export default Car;
