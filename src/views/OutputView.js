import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../utils/constants.js";

class OutputView {
  printGameStartMessage() {
    Console.print(OUTPUT_MESSAGE.GAME_START);
  }

  printCarsStatus(carsStatus) {
    carsStatus.forEach((status) => {
      Console.print(status);
    });
    Console.print("");
  }

  printWinners(winners) {
    Console.print(OUTPUT_MESSAGE.WINNER(winners));
  }
}

export default OutputView;
