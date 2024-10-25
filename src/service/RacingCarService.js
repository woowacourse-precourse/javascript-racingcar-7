import { getCars } from '../util/util.js';
import Validator from '../Validator.js';
import { CarModel } from '../model/CarModel.js';

export default class RacingCarService {
  constructor() {
    this.cars = [];
  }

  saveCars(carsString) {
    const cars = getCars(carsString);
    Validator.carName(cars);
    Validator.carNumber(cars);
    cars.forEach((car) => {
      this.cars.push(new CarModel(car));
    });
  }

  processCarMovement() {
    return this.cars.map((car) => {
      car.advanceOnRandom();
      return { name: car.getName(), advancedCount: car.getAdvancedCount() };
    });
  }

  getWinners() {
    const maxAdvancedCount = Math.max(
      ...this.cars.map((car) => car.getAdvancedCount()),
    );

    return this.cars
      .filter((car) => car.getAdvancedCount() === maxAdvancedCount)
      .map((car) => car.getName());
  }
}
