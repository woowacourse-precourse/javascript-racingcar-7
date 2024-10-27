import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/constant';

const InputView = {
  async carNames() {
    return await Console.readLineAsync(INPUT_MESSAGE.carNames);
  },

  async attemptCount() {
    return await Console.readLineAsync(INPUT_MESSAGE.attemptCount);
  },
};

export default InputView;
