import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_PRINT_MESSAGES } from "../constants/printMessage.js";

const Output = {
  printResultTitle() {
    MissionUtils.Console.print(OUTPUT_PRINT_MESSAGES.resultTitle);
  },

  printNewLine() {
    MissionUtils.Console.print("");
  },

  printWinners(winners) {
    MissionUtils.Console.print(OUTPUT_PRINT_MESSAGES.winners(winners.join(", ")));
  },

  printResult(cars) {
    cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.dist)}`);
    });
  },

  printResults(raceLogs) {
    Output.printResultTitle();
    raceLogs.forEach((cars) => {
      Output.printResult(cars);
      Output.printNewLine();
    });
  },

};

export default Output;
