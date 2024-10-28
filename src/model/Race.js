export class Race {
  constructor() {
    this.cars = [];
  }

  getCars() {
    return this.cars;
  }

  addCar(car) {
    this.cars.push(car);
  }

  play() {
    this.cars.forEach((car) => car.move());
  }
}
