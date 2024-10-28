import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

class InputView {
  static readCarNames() {
    return new Promise((resolve, reject) => {
      Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)", (input) => {
        try {
          const carNames = input.split(',').map((name) => name.trim());
          Validator.validateCarNames(carNames);
          resolve(carNames);
        } catch (error) {
          Console.print(error.message);
          reject(error);
        }
      });
    });
  }

  static readAttemptCount() {
    return new Promise((resolve, reject) => {
      Console.readLineAsync("시도할 횟수는 몇 회인가요?", (input) => {
        try {
          const attempts = Validator.validateAttemptCount(parseInt(input, 10));
          resolve(attempts);
        } catch (error) {
          Console.print(error.message);
          reject(error);
        }
      });
    });
  }
}

export default InputView;
