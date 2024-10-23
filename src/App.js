import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const inputCarNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );

      const carNames = inputCarNames.split(',');
      Console.print(`자동차 이름: ${carNames}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
