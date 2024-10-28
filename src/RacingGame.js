import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class RacingGame {
  constructor() {
    this.cars = [];
    this.count = 0;
  }

  async play() {
    try {
      await this.initializeGame();
      await this.race();
      this.announceWinners();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async initializeGame() {
    const carNames = await this.getCarNames();
    this.validateCarNames(carNames);
    this.count = await this.getCount();
    this.validateCount(this.count);
    this.cars = carNames.map((name) => new Car(name));
  }

  async getCarNames() {
    const line = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return line.split(',');
  }

  async getCount() {
    const count = await Console.readLineAsync('시도할 회수는 몇회인가요?\n');
    return Number(count);
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

  validateCount(count) {
    if (isNaN(count) || count <= 0 || !Number.isInteger(count)) {
      throw new Error('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
    }
  }

  async race() {
    Console.print('\n실행 결과');

    for (let i = 0; i < this.count; i++) {
      this.moveAllCars();
      this.printCurrentPositions();
      Console.print('');
    }
  }

  moveAllCars() {
    this.cars.forEach((car) => {
      const number = Random.pickNumberInRange(0, 9);
      car.move(number);
    });
  }

  printCurrentPositions() {
    this.cars.forEach((car) => {
      const position = '-'.repeat(car.getPosition());
      Console.print(`${car.getName()} : ${position}`);
    });
  }

  announceWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default RacingGame;
