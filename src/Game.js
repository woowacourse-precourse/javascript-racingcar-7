import { Console } from "@woowacourse/mission-utils";
import Utils from "./Utils.js";

class Game {
  constructor() {
    this.Utils = new Utils();
  }

  runRacing(count, inputNames) {
    let cars = this.Utils.makeCarObj(inputNames);
    Console.print("\n실행결과");
    for (let i = 0; i < count; i++) {
      cars.forEach((car) => {
        car.moveRandomDistance();
        car.printStatus();
      });
      Console.print("\n");
    }
    return this.Utils.getWinner(cars);
  }
}

export default Game;
