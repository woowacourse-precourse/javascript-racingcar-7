import { Console } from '@woowacourse/mission-utils';
import validationUtils from '../utils/validationUtils.js';

class InputController {
  async getCarNames() {
    return new Promise((resolve, reject) => {
      Console.readLine('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n', (input) => {
        try {
          const carNames = input.split(',').map(name => name.trim());
          validationUtils.validateCarNames(carNames);
          resolve(carNames);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  async getRoundCount() {
    return new Promise((resolve, reject) => {
      Console.readLine('시도할 횟수는 몇 회인가요?\n', (input) => {
        try {
          const roundCount = parseInt(input, 10);
          validationUtils.validateRoundCount(roundCount);
          resolve(roundCount);
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}

export default InputController;
