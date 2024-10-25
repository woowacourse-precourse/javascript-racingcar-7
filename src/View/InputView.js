import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  async readInput(string) {
    let inputValue = '';

    try {
      inputValue = await MissionUtils.Console.readLineAsync(string);
    } catch (err) {
      throw new Error(err);
    }

    return inputValue;
  }

  async readCarNames() {
    const carNamesInput = await this.readInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const carNames = carNamesInput.split(',').map(name => name.trim());

    return carNames;
  }

  async readAttemptCount() {
    let attemptCount = 0;

    const input = await this.readInput('시도할 횟수는 몇 회인가요?\n');
    attemptCount = Number(input);

    return attemptCount;
  }
}

export default InputView;
