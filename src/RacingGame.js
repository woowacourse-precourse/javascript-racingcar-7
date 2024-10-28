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
    this.validateCarNames(carNames);
    const cars = carNames.map((name) => new Car(name));
    const count = await this.getCount();
    Console.print(cars);
  }

  validateCarNames(carNames) {
    const nameSet = new Set(carNames);
    if (carNames.some((name) => !name || name.trim().length === 0)) {
      throw new Error('[ERROR] 자동차 이름은 빈 값일 수 없습니다.');
    }
    if (carNames.some((name) => name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.');
    }
    if (nameSet.size !== carNames.length) {
      throw new Error('[ERROR] 중복된 이름이 있습니다.');
    }
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
