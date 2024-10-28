import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCarName(message) {
    const input = await Console.readLineAsync(message);
    const carList = input.split(',').map((name) => name.trim());
    return carList;
  },

  async readTurnCount(message) {
    const input = await Console.readLineAsync(message);
    return Number(input);
  },
};

export default InputView;
