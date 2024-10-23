import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/MESSAGE.js';

class InputView {
  async getCarNameInput() {
    let userCarName = await Console.readLineAsync(MESSAGE.CAR_NAME_PROMPT);
    return userCarName;
  }
}
export default InputView;
