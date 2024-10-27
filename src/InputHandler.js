import { Console } from '@woowacourse/mission-utils';
import { INPUT_PROMPT } from './Constants.js';

class InputHandler {
  readCarNames() {
    return Console.readLineAsync(INPUT_PROMPT.CAR_NAMES);
  }

  readMoveAttpes() {
    return Console.readLineAsync(INPUT_PROMPT.MOVE_ATTEMPTS);
  }
}

export default InputHandler;
