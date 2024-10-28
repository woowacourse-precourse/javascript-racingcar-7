import { Console } from "@woowacourse/mission-utils";
import {
  VALID_CAR_NAME_REGEXP,
  MIN_CAR_NAME_LENGTH,
  MAX_CAR_NAME_LENGTH,
} from "../constants/Constants.js";
import {
  ERROR_EMPTY_CAR_NAME,
  ERROR_OVER_CAR_NAME_LENGTH,
  ERROR_INVALID_CAR_NAME,
  ERROR_INVALID_NUMBER_OF_ATTEMPTS,
} from "../constants/ErrorMessages.js";

export default class InputView {
  static async inputCarName() {
    const carName = await Console.readLineAsync(`자동차 이름을 입력하세요 : `);
    this.checkCarNameLength(carName);
  }

  static checkCarNameLength(carName) {
    if (MIN_CAR_NAME_LENGTH > carName) {
      throw new Error(ERROR_EMPTY_CAR_NAME);
    } else if (carName > MAX_CAR_NAME_LENGTH) {
      throw new Error(ERROR_OVER_CAR_NAME_LENGTH);
    } else {
      this.isValidCarName(carName);
    }
  }

  static isValidCarName(carName) {
    if (VALID_CAR_NAME_REGEXP.test(carName)) {
      // 시도 횟수 입력 받기
    } else {
      throw new Error(ERROR_INVALID_CAR_NAME);
    }
  }
}
