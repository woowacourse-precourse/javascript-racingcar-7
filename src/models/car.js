export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    this.distance += 1;
  }

  getProgressBar() {
    return "-".repeat(this.distance);
  }
}
