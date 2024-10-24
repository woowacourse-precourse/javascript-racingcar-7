class Car {
  constructor() {
    this.position = 0;
  }

  getPosition() {
    return this.position;
  }

  move() {
    this.position += 1;
  }
}

export default Car;
