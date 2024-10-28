import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.movedDistance = 0;
  }

  moveRandomDistance() {
    const Randomkey = Random.pickNumberInRange(0, 9);
    if (Randomkey >= 4) {
      this.movedDistance++;
    }
  }

  printStatus() {
    let movedDraw = "";
    for (let i = 0; i < this.movedDistance; i++) {
      movedDraw += "-";
    }
    Console.print(`${this.name} : ${movedDraw}`);
  }
}

export default Car;
