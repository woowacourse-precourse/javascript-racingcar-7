import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.moved = 2;
  }

  run() {}

  getStatus() {
    let movedDraw = "";
    for (let i = 0; i < this.moved; i++) {
      movedDraw += "-";
    }
    Console.print(`${this.name} : ${movedDraw}`);
  }
}

export default Car;
