import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";

/**
 * @class Race
 * @description 자동차들과 시도 횟수를 관리하고 시도할 횟수만큼 실행
 */
class Race {
  constructor(carNames) {
    // 자동차 이름 배열을 Car 인스턴스 배열로 변환하여 저장
    this.cars = carNames.map((name) => new Car(name));
  }

  /**
   * @description 시도 횟수만큼 자동차를 전진
   * @param {number} attempts 시도 횟수
   */
  attempt(attempts) {
    Console.print(`\n실행 결과`);
    for (let i = 0; i < attempts; i++) {
      this.cars.forEach((car) => car.move());
      this.printRoundResult();
      Console.print(``);
    }
  }

  /**
   * @description 자동차들의 위치를 출력
   */
  printRoundResult() {
    this.cars.forEach((car) => {
      const positionMarker = "-".repeat(car.getPosition());
      Console.print(`${car.getName()} : ${positionMarker}`);
    });
  }

  /**
   * @description 최종 우승자 반환
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
