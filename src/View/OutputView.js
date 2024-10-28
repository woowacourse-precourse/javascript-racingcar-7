import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  #OUTPUT_MESSAGE = Object.freeze({
    EXECUTION_RESULT: '\n실행 결과',
    RACE_RESULT: (name, count) => `${name} : ${'-'.repeat(count)}`,
    LINE_BREAK: '\n',
  });

  printExecutionResult() {
    Console.print(this.#OUTPUT_MESSAGE.EXECUTION_RESULT);
  }

  printRaceResult(name, count) {
    Console.print(this.#OUTPUT_MESSAGE.RACE_RESULT(name, count));
  }

  printLineBreak() {
    Console.print(this.#OUTPUT_MESSAGE.LINE_BREAK);
  }
}
