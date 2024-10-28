import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Race {
  constructor(carNames, totalRound) {
    this.cars = carNames.map((name) => new Car(name));
    this.totalRound = totalRound;
  }

  runARound() {
    this.cars.forEach((car) => {
      car.move();
      Console.print(car.getState());
    });

    Console.print("");
  }

  start() {
    Console.print("\n실행 결과");

    for (let i = 0; i < this.totalRound; i++) {
      this.runARound();
    }
  }
}

export default Race;
