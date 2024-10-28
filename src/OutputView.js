import { Console } from '@woowacourse/mission-utils';
import { FORWARD_SYMBOL } from '../src/constants.js';

const OutputView = {
  printCurrentCarInfo(name, forwardCount) {
    const forwardResult = FORWARD_SYMBOL.repeat(forwardCount);

    Console.print(`${name} : ${forwardResult}`);
  },
};

export default OutputView;
