import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

export default class CarRacingModel {
  constructor(carNames) {
    this.cars = carNames.split(",").map((names) => new Car(names));
  }

  runRace(tryCount) {
    for (let i = 0; i < tryCount; i++) {
      this.cars.forEach((car) => {
        car.move();
        Console.print(`${car.carName} : ${car.moveProgress()}`);
      });
      Console.print("");
    }
  }

  getWinners() {
    const maxDistanceCarsName = Math.max(
      ...this.cars.map((car) => car.distance)
    );
    return this.cars
      .filter((car) => car.distance === maxDistanceCarsName)
      .map((car) => car.carName);
  }
}
