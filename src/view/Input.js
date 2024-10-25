import { Console } from '@woowacourse/mission-utils';
import CustomError from '../util/CustomError.js';

class Input {
  static CAR_NAME_GUIDE_MESSAGE =
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n';
  static CAR_NAME_ERROR_MESSAGE_EMPTY = '자동차 이름을 입력해 주세요.';

  static CAR_NAME_MAX_LENGTH = 5;
  static CAR_NAME_ERROR_MESSAGE_LENGTH =
    '자동차 이름은 1자 이상 5자 이하로 입력해 주세요.';

  static CAR_NAME_MIN_NUMBER = 2;
  static CAR_NAME_ERROR_MESSAGE_MIN = '자동차 이름은 최소 2개가 필요합니다.';

  static CAR_NAME_ERROR_MESSAGE_DUPLICATE = '자동차 이름은 중복될 수 없어요.';

  /**
   * @param {string[]} carNames
   * @returns {boolean}
   */
  static isDuplicate(carNames) {
    const carNamesSet = new Set(carNames);
    return carNames.length !== carNamesSet.size;
  }

  /**
   * @returns {Promise<string[]>}
   */
  static async readCarNames() {
    /** @type {string} */
    const input = await Console.readLineAsync(this.CAR_NAME_GUIDE_MESSAGE);

    if (!input) {
      throw new CustomError(this.CAR_NAME_ERROR_MESSAGE_EMPTY);
    }

    const carNames = input.split(',').map((name) => name.trim());
    const isValid = !carNames.every((name) => {
      return !!name && name.length <= this.CAR_NAME_MAX_LENGTH;
    });

    if (isValid) {
      throw new CustomError(this.CAR_NAME_ERROR_MESSAGE_LENGTH);
    }

    if (carNames.length < this.CAR_NAME_MIN_NUMBER) {
      throw new CustomError(this.CAR_NAME_ERROR_MESSAGE_MIN);
    }

    if (this.isDuplicate(carNames)) {
      throw new CustomError(this.CAR_NAME_ERROR_MESSAGE_DUPLICATE);
    }

    return carNames;
  }
}

export default Input;
