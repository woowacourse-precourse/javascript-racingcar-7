// 사용자에게 출력을 담당하는 객체

import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES, ERROR_MESSAGE } from "../utils/message.js";

const OutputView = {
  printGameStart() {
    Console.print(OUTPUT_MESSAGES.RUN_RESULT);
  },

  throwErrorMessage(message) {
    throw new Error(`${ERROR_MESSAGE.ERROR_MESSAGE_PREFIX} ${message}`);
  },

  printRoundStatus(carsStatus) {
    for (const car of carsStatus) {
      const positionDisplay = "-".repeat(car.position);
      Console.print(`${car.name} : ${positionDisplay}`);
    }
    Console.print("");
  },

  async printWinners(winners) {
    await Console.print(
      `${OUTPUT_MESSAGES.FINAL_WINNER_PREFIX} ${winners.join(", ")}`
    );
  },
};

export default OutputView;
