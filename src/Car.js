class Car {
  constructor(name) {
    this.position = 0;
    this.name = name;
  }

  getPosition() {
    return this.position;
  }

  move() {
    this.position += 1;
  }
}

export default Car;
