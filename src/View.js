import { MissionUtils } from "@woowacourse/mission-utils";

export default class View {
  static async readCarNames() {
    return await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  }

  static async readAttempts() {
    return await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }

  static printRaceStatus(cars) {
    cars.forEach(car => {
      const position = "-".repeat(car.getPosition());
      MissionUtils.Console.print(`${car.getName()} : ${position}`);
    });
    MissionUtils.Console.print("");
  }

  static printWinners(winners) {
    const winnerNames = winners.map(car => car.getName()).join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${winnerNames}`);
  }
}