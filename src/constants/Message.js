export const MESSAGE = Object.freeze({
  READ_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  READ_TRY_COUNT: "시도할 횟수는 몇 회인가요?",
});

export const ERROR_MESSAGE = Object.freeze({
  UNIQUE_CAR_NAMES: "[ERROR] 자동차 이름을 중복없이 입력해주세요",
  INVALID_NAMES_LENGTH:
    "[ERROR] 자동차 이름은 1자 이상 5자 이하로 작성해주세요.",
  INVALID_POSITIVE_NUM: "[ERROR] 시도 횟수는 양수값으로 입력해주세요.",
  INVALID_COUNT_TYPE: "[ERROR] 시도 횟수는 문자가 아닌 숫자를 입력해주세요.",
});
