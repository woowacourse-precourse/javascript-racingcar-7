import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  async printOutput(string) {
    try {
      MissionUtils.Console.print(string);
    } catch (err) {
      throw new Error(err);
    }
  }

  printExecutionResults() {
    this.printOutput('실행 결과');
  }
}

export default OutputView;
