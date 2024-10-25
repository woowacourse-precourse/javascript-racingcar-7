import { Console } from '@woowacourse/mission-utils';
class App {
  async getCarNames() {
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

    const isComma = /^(\w+)(,\w+)*$/.test(input);

    if (!input || !isComma) {
      throw new Error('[ERROR] 잘못된 입력값 입니다.');
    }

    const carNames = input.split(',');

    const validateCarNamesLength = carNames.every((carName) => carName.length <= 5);

    if (!validateCarNamesLength) {
      throw new Error('[ERROR] 잘못된 형식의 입력값입니다.');
    }

    return carNames;
  }

  async getAttemptCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    if (!input || Number.isNaN(parseInt(input))) {
      throw new Error('[ERROR] 잘못된 형식의 입력값입니다.');
    }

    return parseInt(input);
  }

  async run() {
    const CarNames = await this.getCarNames();
    const count = await this.getAttemptCount();
  }
}

export default App;
