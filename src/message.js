export const CAR_NAME_ERROR_MESSAGE = Object.freeze({
  carNameTooLong: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
  carNameEmpty: "[ERROR] 자동차 이름은 공백일 수 없습니다.",
  carNameContainsWhitespace: "[ERROR] 자동차 이름에 공백이 포함될 수 없습니다.",
});

export const CAR_VALIDATION_ERROR_MESSAGE = Object.freeze({
  carCountTooLow: "[ERROR] 자동차는 최소 두 대 이상이어야 합니다.",
});

export const ATTEMPT_COUNT_ERROR_MESSAGE = Object.freeze({
  attemptCountEmpty: "[ERROR] 시도 횟수를 공백으로 입력하실 수 없습니다.",
  attemptCountNotNumber:
    "[ERROR] 시도 횟수에 숫자가 아닌 값을 입력하실 수 없습니다.",
  attemptCountZero: "[ERROR] 시도 횟수는 1이상이어야 합니다.",
  attemptCountNegative: "[ERROR] 시도 횟수는 음수일 수 없습니다.",
  attemptCountNotInteger: "[ERROR] 시도 횟수는 정수여야 합니다.",
});
