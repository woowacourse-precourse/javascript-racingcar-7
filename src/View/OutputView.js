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

  printCarProgress(carName, forwardCount) {
    this.printOutput(`${carName} : ${'-'.repeat(forwardCount)}`);
  }

  printAllCarProgress(carNames, forwardCount) {
    carNames.map((carName, index) => {
      this.printCarProgress(carName, forwardCount[index]);
    });
  }
}

export default OutputView;
