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

  printRaceCarProgress(raceCarName, forwardCount) {
    this.printOutput(`${raceCarName} : ${'-'.repeat(forwardCount)}`);
  }

  printRoundProgress(raceCarNames, forwardCounts) {
    raceCarNames.forEach((raceCarName, index) => {
      this.printRaceCarProgress(raceCarName, forwardCounts[index]);
    });
  }

  printAllRaceCarProgress(attemptCount, raceCarNames, forwardCounts) {
    for (let i = 0; i < attemptCount; i++) {
      this.printRoundProgress(raceCarNames, forwardCounts[i]);
      this.printOutput('');
    }
  }

  printWinners(winners) {
    const formattedWinners = winners.join(', ');
    this.printOutput(`최종 우승자 : ${formattedWinners}`);
  }
}

export default OutputView;
