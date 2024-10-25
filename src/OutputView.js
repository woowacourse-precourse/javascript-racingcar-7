import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants.js";

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

  printWinner() {},
};

export default OutputView;
