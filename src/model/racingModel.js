import CarModel from './carModel.js';

class RacingModel {
  constructor(carNames, count) {
    this.cars = carNames.map((name) => new CarModel(name));
    this.count = count;
  }

  race() {
    this.cars.forEach((element) => element.move());
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    return this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }

  getCars() {
    return this.cars;
  }
}
export default RacingModel;
