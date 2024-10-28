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

  getWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));

    return this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName())
      .join(', ');
  }
}
