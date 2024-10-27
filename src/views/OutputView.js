import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printResult(result) {
    Console.print(`실행 결과`);
    Console.print(`${result}`);
  }

  static printError(errorMessage) {
    Console.print(errorMessage);
  }
}

export default OutputView;
