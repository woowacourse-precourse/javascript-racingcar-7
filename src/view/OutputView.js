import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  static printRaceStatus(cars) {
    Console.print("\n실행 결과");
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    });
    Console.print(""); // 빈 줄 추가
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
