import { MESSAGES, GAME_RULES } from "../constants/index.js";

// 중복 체크
export const hasDuplicate = (carNames) => {
  const uniqueCarNames = new Set(carNames);
  return uniqueCarNames.size !== carNames.length;
};

// 길이 수 체크(min 이상, max 이하인지 체크)
export const isValidLength = (target, min, max) => {
  return min <= target.length && target.length <= max;
};

// 자동차 이름 길이 유효성 검사
export const hasInvalidCarNameLength = (carNames) => {
  const { MIN_LENGTH, MAX_LENGTH } = GAME_RULES;
  return carNames.some((carName) => !isValidLength(carName, MIN_LENGTH, MAX_LENGTH));
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
