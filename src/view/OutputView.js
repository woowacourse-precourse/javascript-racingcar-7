import { Console } from '@woowacourse/mission-utils';
import { FORWARD_SYMBOL, OUTPUT_MESSAGES } from '../constants/constants.js';

const OutputView = {
  printRaceStartMessage() {
    Console.print(OUTPUT_MESSAGES.RACE_RESULT);
  },

  printRoundResult(carName, forwardCount) {
    const forwardSymbol = FORWARD_SYMBOL.repeat(forwardCount);
    Console.print(`${carName} : ${forwardSymbol}`);
  },
  
  printWinner(winner) {
    Console.print(`${OUTPUT_MESSAGES.WINNER}${winner}`);
  },

  printErrorMessage(errorMessage) {
    throw new Error(`${OUTPUT_MESSAGES.ERROR} ${errorMessage}`);
  },

  printNewLine() {
    Console.print('');
  },
}

export default OutputView;