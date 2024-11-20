// GameManage.js
import { Car } from "./Car";
export class GameManage {
  constructor(carNames) {
    this.cars = this.createCars(carNames);
  }

  createCars(carNames) {
    const names = carNames.split(",").map((name) => name.trim());
    return names.map((name) => new Car(name));
  }

  race() {
    this.cars.forEach((car) => car.move());
  }

  printCurrentStatus() {
    this.cars.forEach((car) => car.printStatus());
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    return winners.join(", ");
  }
}
