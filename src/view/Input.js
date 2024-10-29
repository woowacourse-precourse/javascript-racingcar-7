import { Console } from '@woowacourse/mission-utils';
import CustomError from '../util/CustomError.js';
import {
  CAR_NAME_GUIDE_MESSAGE,
  CAR_NAME_ERROR_MESSAGE_EMPTY,
  CAR_NAME_MAX_LENGTH,
  CAR_NAME_ERROR_MESSAGE_LENGTH,
  CAR_NAME_MIN_NUMBER,
  CAR_NAME_ERROR_MESSAGE_MIN,
  CAR_NAME_ERROR_MESSAGE_DUPLICATE,
  TIMES_GUIDE_MESSAGE,
  TIMES_ERROR_MESSAGE_EMPTY,
  TIMES_ERROR_MESSAGE_NAN,
  TIMES_ERROR_MESSAGE_INTEGER,
  TIMES_ERROR_MESSAGE_POSITIVE_NUMBER,
} from './Input.constant.js';

class Input {
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
    const input = await Console.readLineAsync(CAR_NAME_GUIDE_MESSAGE);

    if (!input) {
      throw new CustomError(CAR_NAME_ERROR_MESSAGE_EMPTY);
    }

    const carNames = input.split(',').map((name) => name.trim());
    const isValid = !carNames.every((name) => {
      return !!name && name.length <= CAR_NAME_MAX_LENGTH;
    });

    if (isValid) {
      throw new CustomError(CAR_NAME_ERROR_MESSAGE_LENGTH);
    }

    if (carNames.length < CAR_NAME_MIN_NUMBER) {
      throw new CustomError(CAR_NAME_ERROR_MESSAGE_MIN);
    }

    if (this.isDuplicate(carNames)) {
      throw new CustomError(CAR_NAME_ERROR_MESSAGE_DUPLICATE);
    }

    return carNames;
  }

  /**
   * @returns {Promise<number>}
   */
  static async readTimes() {
    /** @type {string} */
    const input = await Console.readLineAsync(TIMES_GUIDE_MESSAGE);
    const times = Number(input);

    if (!input) {
      throw new CustomError(TIMES_ERROR_MESSAGE_EMPTY);
    }

    if (Number.isNaN(times)) {
      throw new CustomError(TIMES_ERROR_MESSAGE_NAN);
    }

    if (!Number.isSafeInteger(times)) {
      throw new CustomError(TIMES_ERROR_MESSAGE_INTEGER);
    }

    if (times < 1) {
      throw new CustomError(TIMES_ERROR_MESSAGE_POSITIVE_NUMBER);
    }

    return times;
  }
}

export default Input;
