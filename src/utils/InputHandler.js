import { Console } from '@woowacourse/mission-utils';

class InputHandler {
  static async getInput(message) {
    return Console.readLineAsync(message);
  }
}

export default InputHandler;
