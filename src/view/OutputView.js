import { Console } from "@woowacourse/mission-utils";
import { FORWARD_SYMBOL, OUTPUT_MESSAGES } from "../constants/constants.js";

const OutputView = {
  printRaceStartMessage() {
    Console.print(OUTPUT_MESSAGES.RACE_RESULT);
  },

  printRoundResult(carName, moveCounts) {
    const forwardSymbol = FORWARD_SYMBOL.repeat(moveCounts);
    Console.print(`${carName} : ${forwardSymbol}`);
  },
  
  printWinner(winner) {
    Console.print(`${OUTPUT_MESSAGES.WINNER}${winner}`);
  },

  printErrorMessage(errorMessage) {
    throw new Error(`${OUTPUT_MESSAGES.ERROR} ${errorMessage}`);
  }
}

export default OutputView;