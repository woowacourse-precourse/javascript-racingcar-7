import { ERROR_MESSAGES } from "./constants/message.js";
import RULES from "./constants/rule.js";

export function isCarNamesValid(cars) {
  if (cars.some((car) => car.length > RULES.CAR_NAME_MAX_LENGTH)) {
    return {
      isCarValid: false,
      errCarMessage: ERROR_MESSAGES.OVER_CAR_NAME_LENGTH,
    };
  }

  if (new Set(cars).size !== cars.length) {
    return { isCarValid: false, errCarMessage: ERROR_MESSAGES.NO_DUPLICATE };
  }

  if (cars.some((car) => car.trim() === "")) {
    return { isCarValid: false, errCarMessage: ERROR_MESSAGES.NO_BLANK };
  }

  return { isCarValid: true };
}

export function isTrialInputValid(input) {
  const numInput = Number(input);

  if (Number.isNaN(numInput)) {
    return { isTrialValid: false, errTrialMessage: ERROR_MESSAGES.NOT_NUMBER };
  }

  if (!Number.isInteger(numInput)) {
    return { isTrialValid: false, errTrialMessage: ERROR_MESSAGES.NOT_INTEGER };
  }

  if (numInput < 0) {
    return {
      isTrialValid: false,
      errTrialMessage: ERROR_MESSAGES.NOT_NEGATIVE,
    };
  }

  return { isTrialValid: true };
}
