import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";

class Game {
  constructor() {
    this.cars = [];
  }

  initializeCars(carNames) {
    carNames.forEach((name) => {
      const car = new Car(name);
      this.cars.push(car);
    });
  }

  play(availableAttempts) {
    Console.print("\n실행결과");
    for (let i = 0; i < availableAttempts; i++) {
      this.cars.forEach((car) => car.move());
      this.showRacingStatus();
    }
  }

  showRacingStatus() {
    this.cars.forEach((car) => {
      Console.print(`${car.getName()} : ${"-".repeat(car.getDistance())}`);
    });
    Console.print("");
  }
}

export default Game;
