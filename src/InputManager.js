import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './utils/Validator.js';
import converStringToNumber from './utils/convertStringToNumber.js';
import splitStringByComma from './utils/splitStringByComma.js';

class InputManager {
  static async getCarNames() {
    const carNamesInput = await this.readCarNamesInput();
    const carNames = splitStringByComma(carNamesInput);
    this.validateCarNames(carNames);
    return carNames;
  }

  static async readCarNamesInput() {
    return MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
  }

  static validateCarNames(carNames) {
    Validator.validateCarNames(carNames);
  }

  static async getAttempts() {
    const attemptsInput = await this.readAttemptsInput();
    this.validateAttempts(attemptsInput);
    return converStringToNumber(attemptsInput);
  }

  static async readAttemptsInput() {
    return MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  static validateAttempts(attemptsInput) {
    Validator.validateAttempts(attemptsInput);
  }
}

export default InputManager;
