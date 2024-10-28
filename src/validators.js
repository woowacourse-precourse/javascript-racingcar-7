import { ERROR_MESSAGES } from "./constant";

// 자동차 이름 입력에 대한 예외 처리
export function validateCarNames(carNames) {
  if (!carNames || carNames.trim() === "") {
    throw new Error(ERROR_MESSAGES.CAR_NAMES_EMPTY);
  }

  const uniqueNames = new Set();
  carNames.split(',').forEach((name) => {
    if (name.includes(" ")) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_CONTAINS_SPACE);
    }
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_TOO_LONG);
    }
    if (uniqueNames.has(name)) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_DUPLICATE);
    }
    uniqueNames.add(name);
  });
}

// 시도 횟수 입력에 대한 예외 처리
export function validateAttempts(attempts) {
  if (!attempts || attempts.trim() === "") {
    throw new Error(ERROR_MESSAGES.ATTEMPTS_EMPTY);
  }
  const attemptsNumber = Number(attempts);
  if (isNaN(attemptsNumber)) {
    throw new Error(ERROR_MESSAGES.ATTEMPTS_NOT_NUMBER);
  }
  if (!Number.isInteger(attemptsNumber)) {
    throw new Error(ERROR_MESSAGES.ATTEMPTS_NOT_INTEGER);
  }
  if (attemptsNumber <= 0) {
    throw new Error(ERROR_MESSAGES.ATTEMPTS_NOT_POSITIVE);
  }
}
