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
    const tempNumber = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n',
    );
    this.validateNumber(tempNumber);
  }

  validateNumber(tempNumber) {
    if (!Number.isInteger(tempNumber)) {
      throw new Error('[ERROR] 횟수는 정수로 입력해야 합니다.');
    }
    if (tempNumber < 1) {
      throw new Error('[ERROR] 횟수는 1번 이상이어야 합니다.');
    }
    this.number = tempNumber;
  }

  async run() {
    await this.getCarNames();
    this.validateCarNames();
    await this.getNumber();
  }
}

export default App;
