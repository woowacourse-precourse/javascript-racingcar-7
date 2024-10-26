import { Console } from '@woowacourse/mission-utils'

class App {
  constructor () {
    this.carNames = []
    this.output = ''
  }

  async getCarNames () {
    try {
      const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      this.carNames = input.split(',');
    } catch(e) {
      throw e;
    }
  }

  async run() {
    await this.getCarNames();
    Console.print(this.carNames)
  }
}

export default App;
