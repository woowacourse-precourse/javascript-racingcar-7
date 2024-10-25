import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.names = '';
    this.number = null;
    this.nameMap = new Map();
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
      this.nameMap.set(carName, 0);
    });
    this.nameArray = [...splitedNames];
  }

  async getNumber() {
    const tempNumber = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n',
    );
    this.validateNumber(tempNumber);
  }

  validateNumber(tempNumber) {
    if (!Number.isNaN(tempNumber)) {
      if (!Number.isInteger(Number(tempNumber))) {
        throw new Error('[ERROR] 횟수는 정수로 입력해야 합니다.');
      }
      if (tempNumber < 1) {
        throw new Error('[ERROR] 횟수는 1번 이상이어야 합니다.');
      }
      this.number = tempNumber;
    }
  }

  moveCars() {
    for (let i = 0; i < this.names.length; i += 1) {
      const randomNumber = Random.pickNumberInRange(0, 9);

      if (randomNumber >= 4) {
        const beforeValue = this.nameMap.get(this.nameArray[i]);
        this.nameMap.set(this.nameArray[i], beforeValue + 1);
      }
    }
  }

  async run() {
    await this.getCarNames();
    this.validateCarNames();
    await this.getNumber();
    Console.print('실행 결과');
    while (this.number) {
      this.moveCars();
      this.number -= 1;
    }
  }
}

export default App;
