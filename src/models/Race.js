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

  getWinner() {
    const maxDistance = Math.max(...this.cars.map((car) => car.getPosition()));
    const winner = this.cars
      .filter((car) => car.getPosition() === maxDistance)
      .map((car) => car.getName());

    return winner;
  }

  start() {
    Console.print("\n실행 결과");

    for (let i = 0; i < this.totalRound; i++) {
      this.runARound();
    }

    Console.print(`최종 우승자 : ${this.getWinner().join(", ")}`);
  }
}

export default Race;
