import { Console } from '@woowacourse/mission-utils'

class App {
  constructor () {
    this.carNames = []
    this.output = ''
  }

  isValidCarName(name) {
    const carName = name.trim();
    if (carName.length <=0)
      throw new Error('[ERROR] 자동차 이름을 제대로 입력하세욧.');
    if (carName.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자 이하입니다.');
    return carName;
  }

  async getCarNames () {
    try {
      const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      this.carNames = input.split(',').map(this.isValidCarName);
    } catch(e) {
      throw e;
    }
  }

  async run() {
    try {
      await this.getCarNames();
      Console.print(this.carNames);
    } catch(e) {
      Console.print(e.message);
      throw e;
    }
  }
}

export default App;
