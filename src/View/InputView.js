import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  #INPUT_MESSAGE = Object.freeze({
    CAR_NAME:
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    RACE_COUNT: '시도할 횟수는 몇 회인가요?\n',
  });

  async readCarNamesFromInput() {
    const input = await Console.readLineAsync(this.#INPUT_MESSAGE.CAR_NAME);
    return input;
  }

  async readRaceCountFromInput() {
    const input = await Console.readLineAsync(this.#INPUT_MESSAGE.RACE_COUNT);
    return input;
  }
}
