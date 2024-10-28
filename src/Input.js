import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';
import Car from './Car.js';

class Input {
  static async inputCars() {
    const carsInput = await this.input(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const cars = this.separateCar(carsInput);
    Validation.validateCarNames(cars);
    return cars;
  }

  static separateCar(carsInput) {
    return carsInput.split(',').map(name => new Car(name));
  }

  static async inputAttemptCount() {
    const attemptCountInput = await this.input('시도할 횟수는 몇 회인가요?');
    return this.parseAttemptCount(attemptCountInput);
  }

  static parseAttemptCount(attemptCountInput) {
    const attemptCount = Number(attemptCountInput);
    Validation.validateAttemptCount(attemptCount);
    return attemptCount;
  }

  static async input(msg) {
    const input = await Console.readLineAsync(`${msg}\n`);
    return input;
  }
}

export default Input;
