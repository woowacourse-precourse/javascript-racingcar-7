import { Random, Console } from "@woowacourse/mission-utils";

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

class Car {
  constructor(carName) {
    this.carName = carName;
    this.distance = 0;
  }

  move() {
    if (this.getRandomNumber() >= 4) {
      this.distance += 1;
    }
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  moveProgress() {
    return "-".repeat(this.distance);
  }
}
