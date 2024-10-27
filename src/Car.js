class Car {
  constructor(name) {
    if (name.length > 5) {
      throw new Error('[ERROR]');
    }
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position++;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}

export default Car;
