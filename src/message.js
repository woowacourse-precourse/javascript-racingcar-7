export const CAR_NAME_ERROR_MESSAGE = Object.freeze({
  carNameTooLong: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
  carNameEmpty: "[ERROR] 자동차 이름은 공백일 수 없습니다.",
});

export const ATTEMPT_COUNT_ERROR_MESSAGE = Object.freeze({
  attemptCountEmpty: "[ERROR] 시도횟수를 공백으로 입력하실 수 없습니다.",
  attemptCountNotNumber:
    "[ERROR] 시도횟수에 숫자가 아닌 값을 입력하실 수 없습니다.",
  attemptCountNegative: "[ERROR] 시도횟수가 0보다 작으면 안됩니다.",
});
