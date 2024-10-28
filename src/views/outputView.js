// 사용자에게 출력을 담당하는 객체

import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../utils/message.js";

const OutputView = {
  async printGameStart() {
    await Console.print(OUTPUT_MESSAGES.RUN_RESULT);
  },

  async printErrorMessage(message) {
    await Console.print(`${OUTPUT_MESSAGES.ERROR_MESSAGE_PREFIX} ${message}`);
  },

  async printRoundStatus(carsStatus) {
    for (const car of carsStatus) {
      const positionDisplay = "-".repeat(car.position);
      await Console.print(`${car.name} : ${positionDisplay}`);
    }
    await Console.print("");
  },

  async printWinners(winners) {
    await Console.print(
      `${OUTPUT_MESSAGES.FINAL_WINNER_PREFIX} ${winners.join(", ")}`
    );
  },
};

export default OutputView;
