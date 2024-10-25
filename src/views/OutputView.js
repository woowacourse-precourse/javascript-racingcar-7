import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printWinner(names) {
    Console.print(`최종 우승자 : ${names}`);
  }

  static printNoWinner() {
    Console.print(`최종 우승자가 없습니다.`);
  }

  static makeError(message) {
    throw new Error(`[ERROR]: ${message}`);
  }

  static print(message) {
    Console.print(`${message}`);
  }
}

export default OutputView;
