export class CarDto {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getDistance() {
    return this.distance;
  }
  setDistance(distance) {
    this.distance = distance;
  }
}
