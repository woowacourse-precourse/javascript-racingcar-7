import { Console } from '@woowacourse/mission-utils';
import { OutputView } from '../resources/Constants.js';

export default class Output {
  static printResult(winners) {
    const resultNames = winners
      .map((name) => name)
      .join(OutputView.WINNER_NAME_SEPARATOR);
    Console.print(OutputView.WINNER_PRINT_PREFIX + resultNames);
  }
}
