import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  static async carInput() {
    const message =
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    const cars = await MissionUtils.Console.readLineAsync(message);
    return cars;
  }

  static async numberInput() {
    const message = '시도할 횟수는 몇 회인가요?\n';
    const number = await MissionUtils.Console.readLineAsync(message);
    return number;
  }
}

export default InputView;
