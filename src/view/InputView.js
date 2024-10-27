import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/message.js';

const InputView = {
  async readCarName() {
    const input = await Console.readLineAsync(
      INPUT_MESSAGE.CAR_NAME_LIST_INPUT
    );
    const carList = input.split(',').map((name) => name.trim());
    return carList;
  },

  async readTurnCount() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.TURN_COUNT_INPUT);
    return Number(input);
  },
};

export default InputView;
