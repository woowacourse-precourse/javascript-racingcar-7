import { Random, Console } from "@woowacourse/mission-utils";

export default class CarRacingModel {
  constructor(carNames) {
    this.carNames = carNames.split(",").map((names) => new Car(names));
  }

  runRace(tryCount) {
    for (let i = 0; i < tryCount; i++) {
      this.carNames.forEach((car) => {
        car.move();
        Console.print(`${car.carName} : ${car.moveProgress()}`);
      });
      Console.print("");
    }
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
    return Random.pickNumberInRange(1, 9);
  }

  moveProgress() {
    return "-".repeat(this.distance);
  }
}
