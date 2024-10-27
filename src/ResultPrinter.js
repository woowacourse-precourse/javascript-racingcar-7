import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGES } from './constants.js';

class ResultPrinter {
  constructor(result) {
    this.result = result;
  }

  print() {
    Console.print(IO_MESSAGES.OUTPUT_TRY_RESULT);
    this.printTryResult();
    this.printWinner();
  }

  printTryResult() {
    this.result.forEach((moveCntPerCar) => {
      this.printMoveCntPerCar(moveCntPerCar);
      Console.print('\n');
    });
  }

  printMoveCntPerCar(moveCntPerCar) {
    const lines = [];

    Object.entries(moveCntPerCar).forEach(([carName, moveCnt]) => {
      lines.push(`${carName} : ${'-'.repeat(moveCnt)}`);
    });

    Console.print(lines.join('\n'));
  }

  printWinner() {
    const finalMoveCntPerCar = this.result.at(-1);
    const maxMoveCnt = Math.max(...Object.values(finalMoveCntPerCar));
    const winners = Object.entries(finalMoveCntPerCar)
      .filter(([_, moveCnt]) => moveCnt === maxMoveCnt)
      .map(([carName]) => carName);

    Console.print(IO_MESSAGES.OUTPUT_WINNER + winners.join(', '));
  }
}

export default ResultPrinter;
