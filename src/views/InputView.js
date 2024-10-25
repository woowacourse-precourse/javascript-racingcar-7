import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  static async userInput(message) {
    const cars = await MissionUtils.Console.readLineAsync(message);
    return cars;
  }
}

export default InputView;
