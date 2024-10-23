import { MESSAGES } from "../constants/index.js";

// 중복 체크
export const hasDuplicate = (carNames) => {
  const uniqueCarNames = new Set(carNames);
  return uniqueCarNames.size !== carNames.length;
};

// 에러 메세지 만들기
export const createErrorMessage = (message) => {
  return MESSAGES.ERROR + message;
};

// 조건이 true인 경우 예외 처리
export const assertCondition = (condition, errorMessage) => {
  if (condition) {
    throw new Error(errorMessage);
  }
};
