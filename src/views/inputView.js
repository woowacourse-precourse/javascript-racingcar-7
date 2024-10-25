import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    return this.parseCarNames(input);
  },

  parseCarNames(input) {
    return input.split(',').map((name) => name.trim());
  },

  async readGameRounds() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return input;
  },
};

export default InputView;
