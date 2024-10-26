import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, COMMON_ERROR_MESSAGES } from '../constants/constants.js';

const InputView = {
  async readCarNameInput() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGES.CAR_NAME);
      return input;
    } catch (error) {
      Console.print(COMMON_ERROR_MESSAGES.READ_INPUT);
    }
  },

  async readRaceCountInput() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGES.RACE_COUNT);
      return input;
    } catch (error) {
      Console.print(COMMON_ERROR_MESSAGES.READ_INPUT);
    }
  },
}
export default InputView;