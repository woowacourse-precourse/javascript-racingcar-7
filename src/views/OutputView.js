import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/constant';

const OutputView = {
  printResult() {
    Console.print(OUTPUT_MESSAGE.result);
  },

  printCarStatus(carStatus) {
    Console.print(carStatus);
  },

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  },
};

export default OutputView;
