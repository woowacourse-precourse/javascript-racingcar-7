// src/models/Car.js
export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1;
  }

  getPositionStr() {
    return '-'.repeat(this.position);
  }
}
