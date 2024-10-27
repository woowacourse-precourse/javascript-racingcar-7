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
    this.printOutput('\n실행 결과');
  }

  printCarProgress(carName, forwardCount) {
    this.printOutput(`${carName} : ${'-'.repeat(forwardCount)}`);
  }

  printRoundProgress(carNames, forwardCounts) {
    carNames.forEach((carName, index) => {
      this.printCarProgress(carName, forwardCounts[index]);
    });
  }

  printAllCarProgress(attemptCount, carNames, forwardCounts) {
    for (let i = 0; i < attemptCount; i++) {
      this.printRoundProgress(carNames, forwardCounts[i]);
      this.printOutput('');
    }
  }

  printWinners(winners) {
    const formattedWinners = winners.join(', ');
    this.printOutput(`최종 우승자 : ${formattedWinners}`);
  }
}

export default OutputView;
