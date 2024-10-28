import { CarService } from "./service/CarService.js";

export class Game {
  constructor(cars) {
    this.cars = cars;
  }

  playRound() {
    const carService = new CarService();
    this.cars.forEach((car) => (car = carService.move(car)));
  }

  getWinners() {}
}
