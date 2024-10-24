import { ERROR_MESSAGES } from "./constants/message.js";

export function isCarNamesValid(cars) {
  if (cars.some((car) => car.length > 5)) {
    return { isCarValid: false, errCarMessage: ERROR_MESSAGES.OVER_CAR_NAME_LENGTH };
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
  if (isNaN(input)) {
    return { isTrialValid: false, errTrialMessage: ERROR_MESSAGES.NOT_NUMBER };
  }

  if (input < 0) {
    return { isTrialValid: false, errTrialMessage: ERROR_MESSAGES.NOT_NEGATIVE };
  }

  return { isTrialValid: true };
}
