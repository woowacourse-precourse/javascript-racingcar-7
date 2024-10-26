import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async getCarNames(query) {
    try {
      const input = await Console.readLineAsync(query);
      const carNames = input.split(',').map((name) => name.trim());
      return carNames;
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  async getTryNumber(query) {
    try {
      const input = await Console.readLineAsync(query);
      return input;
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  async run() {
    const carNames = await this.getCarNames(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const tryNumber = await this.getTryNumber('시도할 횟수는 몇 회인가요?\n');

    Console.print(carNames);
    Console.print(tryNumber);
  }
}

export default App;
