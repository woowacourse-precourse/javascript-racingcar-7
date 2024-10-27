import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./constant.js";

export const inputCarsException = (cars) => {
  if (cars.length === 1 && cars[0] === "") {
    throw new Error(ERROR_MESSAGES.NO_CAR_INPUT);
  }

  if (cars.some((carName) => carName.length > 5)) {
    throw new Error(ERROR_MESSAGES.EXCEED_CAR_LENGTH);
  }
};

export const inputCountException = (count) => {
  if (isNaN(count)) {
    throw new Error(ERROR_MESSAGES.INVALID_COUNT_INPUT);
  }
  if (count == null || count <= 0) {
    throw new Error(ERROR_MESSAGES.NO_COUNT);
  }
};
