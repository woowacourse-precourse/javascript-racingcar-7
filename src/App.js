import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    this.getCarNames();
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const names = input.split(',');
  }
}

export default App;
