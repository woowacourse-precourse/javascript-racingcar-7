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

  async run() {
    const carNames = await this.getCarNames(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    Console.print(carNames);
  }
}

export default App;
