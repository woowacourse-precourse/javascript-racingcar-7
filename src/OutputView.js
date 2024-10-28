import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants.js";

/**
 * 출력 기능
 */

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printResultTitle() {
    Console.print(OUTPUT_MESSAGE.RESULT_TITLE);
  },

  printEachStep(carManager) {
    Console.print(carManager.getEachStepResult());
  },

  printWinner(carManager) {
    Console.print(`${OUTPUT_MESSAGE.WINNER_NAMES} ${carManager.getWinner()}`);
  },
};

export default OutputView;
