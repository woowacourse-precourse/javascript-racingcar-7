import { Console } from '@woowacourse/mission-utils';
import { OutputView } from '../../resources/Constants.js';

export default class Output {
  static printResult(winners) {
    const resultNames = winners
      .map((name) => name)
      .join(OutputView.WINNER_NAME_SEPARATOR);
    Console.print(OutputView.WINNER_PRINT_PREFIX + resultNames);
  }

  static printRoundResults(carStatuses) {
    carStatuses.forEach(({ name, distance }) => {
      const distanceString = OutputView.DISTANCE_DRAWING.repeat(distance);
      Console.print(`${name} : ${distanceString}`);
    });
    Console.print(''); // Round 별 구분을 위한 공백
  }

  static print(contents) {
    Console.print(contents);
  }
}
