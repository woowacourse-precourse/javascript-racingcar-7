import { Console } from '@woowacourse/mission-utils'

class App {
  constructor () {
    this.carNames = new Map()
    this.rounds = 0
    this.output = ''
  }

  isValidCarName(name) {
    const carName = name.trim();
    if (carName.length <=0)
      throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
    if (carName.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자 이하입니다.');
    return carName;
  }

  hasDuplicateName(list) {
    for (const element of list) {
      this.carNames.set(element, 0);
    }
    if (this.carNames.size !== list.length) throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
  }

  async getCarNames () {
    try {
      const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const carNameList = input.split(',').map(this.isValidCarName);
      this.hasDuplicateName(carNameList);
    } catch(e) {
      throw e;
    }
  }

  async getRounds () {
    const input = Number(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
     
    if (Number.isNaN(input)) throw new Error('[ERROR] 시도할 횟수는 숫자만 입력해주세요');
    if (input <= 0) throw new Error('[ERROR] 시도 횟수는 최소 1회입니다.');
    this.rounds = input;
  }

  async run() {
    try {
      await this.getCarNames();
      await this.getRounds();

      Console.print(this.carNames);
      Console.print(this.rounds);
    } catch(e) {
      Console.print(e.message);
      throw e;
    }
  }
}

export default App;
