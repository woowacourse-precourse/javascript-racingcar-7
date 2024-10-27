class Car {
  constructor(name) {
    this.position = 0;
    this.name = name;
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }

  move() {
    this.position += 1;
  }
}

export default Car;
