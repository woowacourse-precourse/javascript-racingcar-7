import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carNames = await this.getCarNames();
    const tryCount = await this.getTryCount();
    const cars = this.createCars(carNames);
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const names = input.split(',');
    if (this.validateCarNames(names)) {
      return names;
    } else {
      throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.');
    }
  }

  async getTryCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const count = Number(input);
    if (this.validateTryCount(count)) {
      return count;
    } else {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.');
    }
  }

  validateCarNames(names) {
    return names.every((name) => name.length > 0 && name.length <= 5);
  }

  validateTryCount(count) {
    return Number.isInteger(count) && count > 0;
  }

  createCars(names) {
    return names.map((name) => ({ name, position: 0 }));
  }
}

export default App;
