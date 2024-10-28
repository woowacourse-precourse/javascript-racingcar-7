import { Console } from '@woowacourse/mission-utils';

export class OutputView {
  static printResult(result) {
    Console.print(result);
  }

  static printError(ERROR_MESSAGE) {
    Console.print(ERROR_MESSAGE);
  }
}
