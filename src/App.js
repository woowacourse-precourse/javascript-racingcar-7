import { Console } from '@woowacourse/mission-utils';
import { readUserInput } from './utils/readUserInput.js';
import {
  isCarNames,
  isPositiveNumber,
  isUniqueCarNames,
} from './utils/validators.js';
import Car from './models/Car.js';

export default class App {
  async run() {
    try {
      const carNames = await readUserInput(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
        [(str) => isCarNames(str, ','), (str) => isUniqueCarNames(str, ',')]
      );
      const tryNumber = await readUserInput('시도할 횟수는 몇 회인가요?', [
        isPositiveNumber,
      ]);

      const cars = carNames.split(',').map((name) => new Car(name));

      for (let index = 0; index < tryNumber; index++) {
        cars.forEach((car) => {
          Console.print(`${car.getName()} : ${'-'.repeat(car.move())}`);
        });
        Console.print('');
      }
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}
