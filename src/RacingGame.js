import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class RacingGame {
  constructor() {
    this.cars = [];
  }

  async play() {
    try {
      await this.initializeGame();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async initializeGame() {
    const carNames = await this.getCarNames();
    const count = await this.getCount();
    const cars = carNames.map((name) => new Car(name));
    Console.print(cars);
  }

  async getCarNames() {
    const line = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return line.split(',');
  }

  async getCount() {
    const count = await Console.readLineAsync('시도할 회수는 몇회인가요?\n');
    return parseInt(count, 10);
  }
}

export default RacingGame;
