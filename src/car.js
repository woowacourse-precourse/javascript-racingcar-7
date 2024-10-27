class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  move() {
    this.moveCount += 1;
  }
}

export default Car;
