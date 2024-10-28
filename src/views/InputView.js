import { Console } from '@woowacourse/mission-utils';

export class InputView {
  static readInput(MESSAGE) {
    return Console.readLineAsync(MESSAGE);
  }
}
