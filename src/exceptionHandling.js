import { ERROR_MESSAGES } from "./constant.js";

export const inputCarsException = (cars) => {
  if (cars.length === 1 && cars[0] === "") {
    throw new Error(ERROR_MESSAGES.NO_CAR_INPUT);
  }

  if (cars.some((carName) => carName.length > 5)) {
    throw new Error(ERROR_MESSAGES.EXCEED_CAR_LENGTH);
  }
};
