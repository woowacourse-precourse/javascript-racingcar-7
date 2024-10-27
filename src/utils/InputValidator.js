import { ERROR_MESSAGES } from "./constants.js";

export default class InputValidator {
  static validateCarNames(carNamesInput) {
    const carNames = carNamesInput.split(",").map((name) => name.trim());

    // 이름이 빈값인 경우
    if (carNames.some((name) => name === "")) {
      throw new Error(ERROR_MESSAGES.EMPTY_NAME);
    }

    // 이름이 5자를 초과하는 경우
    if (carNames.some((name) => name.length > 5)) {
      throw new Error(ERROR_MESSAGES.NAME_TOO_LONG);
    }

    // 이름이 중복된 경우
    const uniqueNames = new Set(carNames);
    if (uniqueNames.size !== carNames.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
    }

    return carNames;
  }

  static validateAttempts(attemptsInput) {
    const attempts = Number(attemptsInput);

    // 숫자가 아닌 경우
    if (isNaN(attempts)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    }

    // 시도 횟수가 1보다 작은 경우
    if (attempts < 1) {
      throw new Error(ERROR_MESSAGES.INVALID_ATTEMPTS);
    }

    return attempts;
  }
}
