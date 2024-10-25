class Car {
  name;

  position;

  constructor(name) {
    this.name = name;
    this.position = 0;
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
