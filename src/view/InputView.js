import { Console } from '@woowacourse/mission-utils';
import Message from '../constant/Message.js';

class InputView {
  async getCarNamePrompt() {
    await Console.readLineAsync(Message.CAR_NAME_PROMPT);
  }
}
export default InputView;
