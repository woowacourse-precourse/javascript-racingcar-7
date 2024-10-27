import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Game {
  constructor(carNames, attemptCount) {
    this.cars = carNames.map((name) => new Car(name));
    this.attemptCount = attemptCount;
  }

  async start() {
    for (let i = 0; i < this.attemptCount; i++) {
      this.cars.forEach((car) => {
        car.move();
        Console.print(`${car.name} : ${car.position}`);
      });
      Console.print("");
    }

    this.printWinners();
  }

  printWinners() {
    const maxPosition = Math.max(
      ...this.cars.map((car) => car.position.length)
    );
    const winners = this.cars
      .filter((car) => car.position.length === maxPosition)
      .map((car) => car.name)
      .join(", ");

    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default Game;
