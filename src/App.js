import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.cars = [];
  }

  async run() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.cars = this.createCars(carNamesInput);
  }

  createCars(carNamesInput) {
    return carNamesInput.split(',').map(name => name);
  }
}

export default App;
