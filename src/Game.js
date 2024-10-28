import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";
import { validateName } from "./validate.js";

class Game {
  constructor() {
    this.cars = [];
  }

  initializeCars(carNames) {
    const validCarNames = carNames.map((name) => name.trim());
    validateName(validCarNames);
    validCarNames.forEach((name) => {
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
    this.generateGameWinner();
  }

  showRacingStatus() {
    this.cars.forEach((car) => {
      Console.print(`${car.getName()} : ${"-".repeat(car.getDistance())}`);
    });
    Console.print("");
  }

  generateGameWinner() {
    const winnerDistance = Math.max(
      ...this.cars.map((car) => car.getDistance())
    );
    const winners = this.cars
      .filter((car) => car.getDistance() === winnerDistance)
      .map((car) => car.getName());
    Console.print("최종 우승자 : " + winners.join(", "));
  }
}

export default Game;
