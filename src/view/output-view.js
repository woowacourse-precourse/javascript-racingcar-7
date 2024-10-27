import { Console } from '@woowacourse/mission-utils';

const OUTPUT_MESSAGE = Object.freeze({
  EXECUTION_RESULT_OUTPUT: '\n실행 결과',
  WINNER_OUTPUT: '최종 우승자 :',
});

class OutputView {
  printExecutionResultMessage() {
    Console.print(OUTPUT_MESSAGE.EXECUTION_RESULT_OUTPUT);
  }

  printCarProgress(car) {
    Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  }

  printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGE.WINNER_OUTPUT} ${winners.join(', ')}`);
  }
}

export default OutputView;
