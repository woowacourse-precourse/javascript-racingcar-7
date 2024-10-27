import { MESSAGES, GAME_RULES } from "../constants/index.js";

// 중복 체크
export const hasDuplicate = (array) => {
  const uniqueArray = new Set(array);
  return uniqueArray.size !== array.length;
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

// 양의 정수가 아닌지 체크
export const isNotPositiveInteger = (number) => {
  return number <= 0 || !Number.isInteger(number);
};

// 에러 메세지 만들기
export const createErrorMessage = (message) => {
  return MESSAGES.ERROR + message;
};

/**
 * 조건 리스트를 검사하여 첫 번째로 true인 조건의 에러를 throw합니다.
 * @param {Array<{ condition: boolean, message: string }>} conditionList - 검사할 조건과 에러 메세지 배열
 */
export const assertCondition = (conditionList) => {
  const error = conditionList.find(({ condition }) => condition === true);
  if (error) {
    throw new Error(createErrorMessage(error.message));
  }
};
