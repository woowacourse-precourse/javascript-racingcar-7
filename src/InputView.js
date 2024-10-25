import { Console } from "@woowacourse/mission-utils";
import {
  CAR_NAME_MAXIMUM,
  CAR_NAME_MINIMUM,
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  MOVEMENT_MINIMUM,
  TRY_MINIMUM_COUNT,
} from "./constants.js";

const InputView = {
  async getCarNames() {
    return Console.readLineAsync(INPUT_MESSAGE.CAR_NAME_INPUT_MESSAGE);
  },

  async getTryCount() {
    return Console.readLineAsync(INPUT_MESSAGE.TRY_INPUT_MESSAGE);
  },
};

const InputValidation = {
  validateCarNames(carNames = []) {
    carNames.forEach((carName) => {
      if (
        carName.length < CAR_NAME_MINIMUM ||
        carName.length > CAR_NAME_MAXIMUM
      ) {
        throw new Error(ERROR_MESSAGE.CAR_NAME_INPUT_ERROR.RANGE_ERROR);
      }
    });
  },

  validateTryCount(tryCount = "") {
    if (
      !Number.isInteger(Number(tryCount)) ||
      Number(tryCount) < TRY_MINIMUM_COUNT
    ) {
      throw new Error(ERROR_MESSAGE.TRY_INPUT_ERROR.POSITIVE_ERROR);
    }
  },
};

export { InputView, InputValidation };
