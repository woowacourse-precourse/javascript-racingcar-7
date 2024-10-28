import { Console } from '@woowacourse/mission-utils';

class InputView {
  static readInput(text) {
    return Console.readLineAsync(`${text}\n`);
  }
}

export default InputView;
