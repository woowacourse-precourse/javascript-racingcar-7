import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";

class Race {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  /**
   * 시도 횟수만큼 자동차를 전진
   * @param {number} attempts 시도 횟수
   */
  attempt(attempts) {
    for (let i = 0; i < attempts; i++) {
      Console.print(`\n${i + 1} 시도`);
      this.cars.forEach((car) => car.move());
      this.printRoundResult();
    }
  }

  /**
   * 자동차들의 위치를 출력
   */
  printRoundResult() {
    this.cars.forEach((car) => {
      const positionMarker = "-".repeat(car.getPosition());
      Console.print(`${car.getName()} : ${positionMarker}`);
    });
  }

  /**
   * 최종 우승자 반환
   * @returns {Array} 최종 우승자들의 이름 배열
   */
  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    return winners;
  }
}

export default Race;
