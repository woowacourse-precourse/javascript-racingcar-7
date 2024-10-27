import { MissionUtils } from "@woowacourse/mission-utils";

const Output = {
  printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  },

  printResult(cars) {
    cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.dist)}`);
    });
  },

  printResults(raceLogs) {
    raceLogs.forEach((cars) => {
      Output.printResult(cars);
      Output.printNewLine();
    });
  },

  printResultTitle() {
    MissionUtils.Console.print("\n실행 결과");
  },

  printNewLine() {
    MissionUtils.Console.print("");
  },
};

export default Output;
