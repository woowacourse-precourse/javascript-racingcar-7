// src/views/OutputView.js
import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static printParticipants(playerNames) {
    Console.print(`\n참가자 명단: ${playerNames.join(', ')}\n`);
  }

  static printRaceResult(carsStatus) {
    carsStatus.forEach(status => Console.print(status));
    Console.print('');
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  static printError(message) {
    Console.print(message);
  }
}
