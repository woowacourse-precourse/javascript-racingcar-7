import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.cars = [];
    this.moveCount = 0;
  }

  async run() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

    const carNames = await this.getCarNames();
    this.createCars(carNames);
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

  onError() {
    throw new Error('[ERROR]');
  }
}

export default App;
