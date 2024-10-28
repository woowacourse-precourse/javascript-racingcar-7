import { CarService } from "./service/CarService.js";

export class Game {
  constructor(cars) {
    this.cars = cars;
  }

  playRound() {
    const carService = new CarService();
    this.cars.forEach((car) => (car = carService.move(car)));
  }

  getWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.getDistance()));
    return this.cars
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
  }
}
