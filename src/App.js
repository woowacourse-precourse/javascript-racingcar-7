import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Race from './Race.js';

class App {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  async run() {
    const carNames = await this.promptCarNames();
    this.setCars(carNames);

    const rounds = await this.promptRounds();
    this.setRounds(rounds);
  }

  // 시도할 횟수 입력 받기
  async promptRounds() {
    return new Promise((resolve) => {
      Console.readLineAsync('시도할 횟수는 몇 회인가요?\n').then(resolve);
    });
  }

  setCars(input) {
    const names = input.split(',');
    if (this.validateNames(names)) {
      this.cars = names.map((name) => new Car(name));
    } else {
      throw new Error('[ERROR]');
    }
  }

  setRounds(input) {
    const rounds = parseInt(input, 10);
    if (isNaN(rounds) || rounds <= 0) {
      throw new Error('[ERROR]');
    }
    this.rounds = rounds;
  }
}

export default App;
