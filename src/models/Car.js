export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  updateDistance(randomNumber) {
    if (randomNumber >= 4) {
      this.distance += 1;
    }
  }

  getDistance() {
    return this.distance;
  }
}
