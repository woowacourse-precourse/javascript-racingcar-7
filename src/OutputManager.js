import { Console } from "@woowacourse/mission-utils";

export class OutputManager {
  static printRaceStatus(cars) {
    Console.print("\n실행 결과");
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
  }

  static printWinners(winners) {
    Console.print(`\n최종 우승자 : ${winners.join(", ")}`);
  }
}
