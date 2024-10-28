import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Race from './Race.js';

class App {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  // 비동기 입력
  async run() {
    const carNames = await this.promptCarNames();
    this.setCars(carNames);
  }

  // 자동차 이름 입력 받기
  async promptCarNames() {
    return new Promise((resolve) => {
      Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n').then(resolve);
    });
  }

  // 입력받은 자동차 이름 설정
  setCars(input) {
    const names = input.split(',');
    if (this.validateNames(names)) {
      this.cars = names.map((name) => new Car(name));
    } else {
      throw new Error('[ERROR]');
    }
  }

  // 이름 유효성 검사
  validateNames(names) {
    return names.every((name) => name.length <= 5);
  }
}

export default App;
