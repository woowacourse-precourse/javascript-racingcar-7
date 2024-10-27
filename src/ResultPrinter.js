import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGES } from './constants.js';

class ResultPrinter {
  constructor(moveCntPerCar) {
    this.moveCntPerCar = moveCntPerCar;
  }

  print() {
    Console.print(IO_MESSAGES.OUTPUT_TRY_RESULT);
    this.printAttemptResult();
    this.printWinner();
  }

  printAttemptResult() {
    const lines = [];

    Object.entries(this.moveCntPerCar).forEach(([carName, moveCnt]) => {
      lines.push(`${carName} : ${'-'.repeat(moveCnt)}`);
    });

    Console.print(lines.join('\n'));
  }

  printWinner() {
    const maxMoveCnt = Math.max(...Object.values(this.moveCntPerCar));
    const winners = Object.entries(this.moveCntPerCar)
      .filter(([_, moveCnt]) => moveCnt === maxMoveCnt)
      .map(([carName]) => carName);

    Console.print(IO_MESSAGES.OUTPUT_WINNER + winners.join(', '));
  }
}

export default ResultPrinter;
