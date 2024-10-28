import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";

class Race {
  constructor(carNames, rounds) {
    this.cars = carNames.map((name) => new Car(name));
    this.rounds = rounds;
  }

  // 경주 결과 출력
  start() {
    Console.print("\n실행 결과");
    for (let i = 0; i < this.rounds; i++) {
      this.moveCars();
      this.printPositions();
    }
    this.printWinners();
  }

  // 각 자동차 이동
  moveCars() {
    this.cars.forEach((car) => car.move());
  }

  // 각 자동차의 위치 출력
  printPositions() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print("");
  }

  // 우승자 출력
  printWinners() {
    let maxPosition = 0;
    let winners = [];

    for (const car of this.cars) {
      if (car.position > maxPosition) {
        maxPosition = car.position;
        winners = [car.name]; // 우승자 갱신
      } else if (car.position === maxPosition) {
        winners.push(car.name); // 공동 우승자 추가
      }
    }

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default Race;
