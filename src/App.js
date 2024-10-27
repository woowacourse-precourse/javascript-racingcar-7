import { Console } from '@woowacourse/mission-utils';

class App {
  async getCarNames() {
    return Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n'
    );
  }

  async getTryCount() {
    return Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  async run() {
    const userCarInput = await this.getCarNames();
    const tryCount = await this.getTryCount();
  }
}

export default App;
