import { Console } from "@woowacourse/mission-utils";

class Race {
  #cars;
  #attempts;

  constructor(cars, attempts) {
    this.#cars = cars;
    this.#attempts = attempts;
  }

  // 정해진 횟수만큼 주행 시작
  start() {
    for (let i = 0; i < this.#attempts; i++) {
      this.#cars.forEach((car) => car.move());
      this.printRaceStatus();
    }
    this.printWinners();
  }

  // 경주 중간 결과를 출력
  printRaceStatus() {
    this.#cars.forEach((car) => {
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    });
    Console.print("");
  }

  // 경주 최종 결과를 출력
  printWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars.filter(
      (car) => car.getPosition() === maxPosition
    );
    const winnerNames = winners.map((car) => car.getName()).join(", ");
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default Race;
