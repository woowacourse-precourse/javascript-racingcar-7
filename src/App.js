import { Console } from '@woowacourse/mission-utils';
import { readUserInput } from './utils/readUserInput.js';
import {
  isCarNames,
  isPositiveNumber,
  isUniqueCarNames,
} from './utils/validators.js';

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

      Console.print(carNames);
      Console.print(tryNumber);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}
