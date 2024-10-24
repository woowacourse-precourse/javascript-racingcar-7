export class CarModel {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  move() {
    this.step += 1;
  }
}
