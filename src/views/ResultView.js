import { Console } from '@woowacourse/mission-utils';

class ResultView {
  static displayWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default ResultView;
