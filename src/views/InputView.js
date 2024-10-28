// src/views/InputView.js
import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static async getPlayerNames() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const input = await Console.readLineAsync(); // 인자 제거
    return input;
  }

  static async getRaceTime() {
    Console.print('시도할 횟수는 몇 회인가요?\n');
    const input = await Console.readLineAsync(); // 인자 제거
    return input;
  }
}
