import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../../constant.js';

export class InputView {
  async carNames() {
    return Console.readLineAsync(INPUT.CAR_NAMES);
  }

  async tryNumber() {
    return Console.readLineAsync(INPUT.TRY_NUMBER);
  }
}
