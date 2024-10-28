import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.cars = [];
    this.moveCount = 0;
  }

  async run() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

    const carNames = await this.getCarNames();
    this.createCarObejct(carNames);

    await this.getMoveCount();
  }

  async getCarNames() {
    const namesInput = await Console.readLineAsync('');

    const nameList = namesInput.split(',').map((name) => name.trim());

    if (nameList.some((name) => name.length > 5 || name === '')) {
      this.onError();
    }

    return nameList;
  }

  createCarObejct(names) {
    this.cars = names.map((name) => ({ name, position: 0 }));
  }


  async getMoveCount() {
    Console.print('시도할 횟수는 몇 회인가요?');

    const moveCountInput = await Console.readLineAsync('');
    const moveCount = parseInt(moveCountInput, 10);

    if (isNaN(moveCount) || moveCount <= 0) {
      this.onError();
    }

    this.moveCount = moveCount;
  }


  onError() {
    throw new Error('[ERROR]');
  }
}

export default App;
