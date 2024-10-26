import { MissionUtils } from '@woowacourse/mission-utils';

export class Output {
  displayResults(results) {
    MissionUtils.Console.print('\n실행 결과');
    results.forEach((result) => {
      MissionUtils.Console.print(result + '\n');
    });
  }

  displayWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}
