import { MissionUtils } from "@woowacourse/mission-utils";

export default class Output {
  static printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  static printResult(cars) {
    cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.dist)}`);
    });
  }

  static printResultTitle() {
    MissionUtils.Console.print("\n실행 결과");
  }

  static printNewLine() {
    MissionUtils.Console.print("\n");
  }
}
