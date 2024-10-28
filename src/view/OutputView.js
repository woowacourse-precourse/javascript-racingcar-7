import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  printWinner(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  printStep(name, step) {
    Console.print(`${name} : ${'-'.repeat(step)}`);
  }

  printEmptyLine() {
    Console.print('');
  }

  printResult() {
    Console.print('실행 결과');
  }
}
