import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.names = '';
    this.number = null;
  }

  async getCarNames() {
    this.names = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
  }

  validateCarNames() {
    if (this.names === '') {
      throw new Error('[ERROR] 자동차 이름을 입력하세요.');
    }

    const splitedNames = this.names.split(',');
    splitedNames.forEach(carName => {
      if (carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5글자 이하여야 합니다.');
      }
    });
  }

  async getNumber() {
    this.number = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  async run() {
    await this.getCarNames();
    this.validateCarNames();
    await this.getNumber();
  }
}

export default App;
