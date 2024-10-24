import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES, FORWARD_SYMBOL } from "../constants/constants.js";

const OutputView = {
  printRaceStartMessage() {
    Console.print(PROMPT_MESSAGES.OUTPUT_RACE_RESULT);
  },

  printRoundResult(carName, moveCounts) {
    const forwardSymbol = FORWARD_SYMBOL.repeat(moveCounts);
    Console.print(`${carName} : ${forwardSymbol}`);
  },
  
  printWinner(winner) {
    Console.print(`${PROMPT_MESSAGES.OUTPUT_WINNER}${winner}`);
  },

  printErrorMessage(errorMessage) {
    throw new Error(`${PROMPT_MESSAGES.OUTPUT_ERROR} ${errorMessage}`);
  }
}

export default OutputView;