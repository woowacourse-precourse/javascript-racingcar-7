import { MissionUtils } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../static/Static.js";

const OutputView = {
  printRaceStatus: (cars) => {
    cars.forEach(car => {
      const position = PRINT_MESSAGE.moveMarking.repeat(car.getPosition());
      MissionUtils.Console.print(`${car.getName()} : ${position}`);
    });
    MissionUtils.Console.print("");
  },

  printWinners: (winners) => {
    const winnerNames = winners.map(car => car.getName()).join(", ");
    MissionUtils.Console.print(`${PRINT_MESSAGE.winnerMessage}${winnerNames}`);
  }
};

export default OutputView;