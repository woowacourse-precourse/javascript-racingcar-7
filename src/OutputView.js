import { Console } from '@woowacourse/mission-utils';
import { FORWARD_SYMBOL, NAME_SEPARATOR, OUTPUT_MESSAGE } from '../src/constants.js';

const OutputView = {
  printCurrentCarInfo(name, forwardCount) {
    const forwardResult = FORWARD_SYMBOL.repeat(forwardCount);

    Console.print(`${name} : ${forwardResult}`);
  },
  printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGE.winner} ${OUTPUT_MESSAGE.messageSeparator} ${winners.join(NAME_SEPARATOR)})}`);
  },
};

export default OutputView;
