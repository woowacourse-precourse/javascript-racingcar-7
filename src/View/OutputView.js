import { MissionUtils } from '@woowacourse/mission-utils';
import IOutputView from './Interfaces/IOutputView.js';
import { OUTPUT_PROMPTS } from '../constants.js';

class OutputView extends IOutputView {
  async printOutput(string) {
    try {
      MissionUtils.Console.print(string);
    } catch (err) {
      throw new Error(err);
    }
  }

  printExecutionResults() {
    this.printOutput(OUTPUT_PROMPTS.EXECUTION_RESULT);
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
    this.printOutput(
      OUTPUT_PROMPTS.FINAL_WINNER_ANNOUNCEMENT + formattedWinners
    );
  }
}

export default OutputView;
