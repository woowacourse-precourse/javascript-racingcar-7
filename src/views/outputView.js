// 사용자에게 출력을 담당하는 객체

import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../utils/message.js";

const OutputView = {
  printGameStart() {
    Console.print(OUTPUT_MESSAGES.RUN_RESULT);
  },

  printErrorMessage(message) {
    Console.print(`${OUTPUT_MESSAGES.ERROR_MESSAGE_PREFIX} ${message}`);
  },

  printRoundStatus(carsStatus) {
    carsStatus.forEach((car) => {
      const positionDisplay = "-".repeat(car.position);
      Console.print(`${car.name} : ${positionDisplay}`);
    });
    Console.print("");
  },

  printWinners(winners) {
    Console.print(
      `${OUTPUT_MESSAGES.FINAL_WINNER_PREFIX} ${winners.join(", ")}`
    );
  },
};

export default OutputView;
