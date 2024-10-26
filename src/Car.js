import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name, move) {
    this.name = name;
    this.move = move;
  }

  moveCar() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if (number >= 4) this.move += 1;
  }

  printCar() {
    MissionUtils.Console.print(`${this.name} : ${"-".repeat(this.move)}`);
  }
}

export default Car;
