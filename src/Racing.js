import { MissionUtils, Console } from "@woowacourse/mission-utils";

export class Racing {
  constructor(cars) {
    this.cars = cars;
    this.racing = {};

    cars.forEach(car => {
      this.racing[car] = "";
    });
  }

  race(n) {
    for (let i = 0; i < n; i++) {
      this.cars.forEach((car) => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          this.racing[car] += "-";
        }
      });
      this.printTryRacing();
    }
  }

  printTryRacing() {
    this.cars.forEach(car => {
      Console.print(`${car}: ${this.racing[car]}`);
    });
    Console.print("");
  }
}