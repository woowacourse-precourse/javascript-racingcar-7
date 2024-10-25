import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  printWinner(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  printStep(name, step) {
    Console.print(`${name} : ${'-'.repeat(step)}`);
  }

  printMessage(message) {
    if (message) {
      Console.print(message);
    } else {
      Console.print('');
    }
  }
}
