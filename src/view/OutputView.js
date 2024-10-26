import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printProgress(progress) {
    Console.print(`\n실행 결과${progress}`);
  },
  printWinners(winners) {
    Console.print(`\n최종 우승자 : ${winners}`);
  },
};

export default OutputView;
