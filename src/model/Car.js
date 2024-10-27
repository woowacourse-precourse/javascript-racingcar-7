class Car {
  constructor(name) {
    this.name = name;
    this.position = '';
  }

  move() {
    this.position += '-';
  }

  getPosition() {
    return this.position.length;
  }

  getName() {
    return this.name;
  }
}

export default Car;
