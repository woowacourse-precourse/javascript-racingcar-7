import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printGameResult(winnerNameString) {
    if (winnerNameString.length > 0) {
      this.printWinner(winnerNameString);
      return;
    }
    this.printNoWinner();
  }

  static printWinner(names) {
    Console.print(`최종 우승자 : ${names}`);
  }

  static printNoWinner() {
    Console.print(`최종 우승자가 없습니다.`);
  }

  static print(message) {
    Console.print(`${message}`);
  }
}

export default OutputView;
