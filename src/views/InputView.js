import { Console } from "@woowacourse/mission-utils";
import {
  VALID_CAR_NAME_REGEXP,
  MIN_CAR_NAME_LENGTH,
  MAX_CAR_NAME_LENGTH,
  MIN_ATTEMPT_COUNT,
  MAX_ATTEMPT_COUNT,
} from "../constants/Constants.js";
import {
  ERROR_EMPTY_CAR_NAME,
  ERROR_OVER_CAR_NAME_LENGTH,
  ERROR_INVALID_CAR_NAME,
  ERROR_INVALID_NUMBER_OF_ATTEMPTS,
} from "../constants/ErrorMessages.js";

export default class InputView {
  static async inputCarName() {
    const inputCarNames = await Console.readLineAsync(
      `자동차 이름을 입력하세요 : `
    );

    const carNames = inputCarNames.split(",");
    carNames.forEach((carName) => {
      this.isValidCarNameLength(carName);
    });
  }

  static isValidCarNameLength(carName) {
    if (MIN_CAR_NAME_LENGTH > carName) {
      throw new Error(`[ERROR] ${ERROR_EMPTY_CAR_NAME}`);
    } else if (carName > MAX_CAR_NAME_LENGTH) {
      throw new Error(`[ERROR] ${ERROR_OVER_CAR_NAME_LENGTH}`);
    } else {
      this.isValidCarName(carName);
    }
  }

  static isValidCarName(carName) {
    if (!VALID_CAR_NAME_REGEXP.test(carName)) {
      throw new Error(`[ERROR] ${ERROR_INVALID_CAR_NAME}`);
    }
  }
}
