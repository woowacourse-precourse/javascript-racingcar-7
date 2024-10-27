import { Console } from "@woowacourse/mission-utils";
import { Car } from "./Car";

export class RacingGame {
  constructor(CARNAMES, ROUNDS) {
    this.cars = CARNAMES.map((carName) => new Car(carName));
    this.rounds = ROUNDS;

    if (!Number.isInteger(this.rounds) || this.rounds <= 0) {
      throw new Error("[ERROR] 이동 횟수는 양의 정수여야 합니다.");
    }
  }

  // 자동차 경주 로직
  play() {
    for (let i = 0; i <= this.rounds; i++) {
      this.cars.forEach((car) => car.move());
      this.printCarPosition();
    }
    this.printWinnerCar();
  }

  // 각 자동차의 위치 출력
  printCarPosition() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print("\n");
  }

  // 우승자를 출력하는 로직
  printWinnerCar() {
    const MAXPOSITION = Math.max(...this.cars.map((car) => car.position));
    const WINNERS = this.cars
      .filter((car) => car.position === MAXPOSITION)
      .map((car) => car.name);

    Console.print(`우승자: ${WINNERS.join(", ")}`);
  }
}
