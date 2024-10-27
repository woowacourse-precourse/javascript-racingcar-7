import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Input {
  static async getNameInput() {
    const input = Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return input;
  }

  static getNames(str) {
    const names = str.split(',');
    return names;
  }

  static async getTrial() {
    const num = Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`);
    return num;
  }

  static getCars(names) {
    const cars = names.map((name) => {
      return new Car(name);
    });
    return cars;
  }
}

export default Input;
