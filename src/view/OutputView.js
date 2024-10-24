import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES, FORWARD_SYMBOL } from "../constants/constants.js";

const OutputView = {
  async printRaceStartMessage() {
    Console.print(PROMPT_MESSAGES.OUTPUT_RACE_RESULT);
  },

  async printRoundResult(carName, moveCounts) {
    const forwardSymbol = FORWARD_SYMBOL.repeat(moveCounts);
    Console.print(`${carName} : ${forwardSymbol}`);
  },
  
  async printWinner(winner) {
    Console.print(`${PROMPT_MESSAGES.OUTPUT_WINNER}${winner}`);
  },
}

export default OutputView;