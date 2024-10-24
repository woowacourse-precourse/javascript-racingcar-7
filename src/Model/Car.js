export class Car {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }

  move() {
    this.distance += 1;
  }
}
