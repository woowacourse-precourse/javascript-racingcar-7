import { Console } from '@woowacourse/mission-utils';

class ResultPrinter {
  constructor(moveCntPerCar) {
    this.moveCntPerCar = moveCntPerCar;
  }

  print() {
    Console.print('\n실행 결과');
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

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default ResultPrinter;
