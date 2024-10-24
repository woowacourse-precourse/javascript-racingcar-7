import { MissionUtils } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../static/Static.js";

export default class View {
  static async readCarNames() {
    return await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.inputName);
  }

  static async readAttempts() {
    return await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.inputTries);
  }

  static printRaceStatus(cars) {
    cars.forEach(car => {
      const position = PRINT_MESSAGE.moveMarking.repeat(car.getPosition());
      MissionUtils.Console.print(`${car.getName()} : ${position}`);
    });
    MissionUtils.Console.print("");
  }

  static printWinners(winners) {
    const winnerNames = winners.map(car => car.getName()).join(", ");
    MissionUtils.Console.print(`${PRINT_MESSAGE.winnerMessage}${winnerNames}`);
  }
}