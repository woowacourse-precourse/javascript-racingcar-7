export default class Car {
  name;

  distance;

  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  moveForward() {
    this.distance += 1;
  }

  getName() {
    return this.name;
  }

  getDistance() {
    return this.distance;
  }
}
