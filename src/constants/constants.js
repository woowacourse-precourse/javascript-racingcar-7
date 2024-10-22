export const RUN_MESSAGE = {
  INPUT_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  INPUT_ATTEMPTS: "시도할 횟수는 몇 회인가요?",
  FINAL_WINNER: "최종 우승자 : ",
  RUN_RESULT: "실행 결과",
  COLON: " : ",
  CAR_MOVE: "-",
};

export const ERROR_MESSAGES = {
  CAR_NAME_TOO_LONG: "[ERROR] 경주할 자동차 이름은 5자 이하여야 합니다.",
  INVALID_NAME_SEPARATOR:
    "[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분해야합니다.",
  NAME_MUST_BE_KOREAN_OR_ENGLISH:
    "[ERROR] 자동차 이름은 한글 또는 영어로 작성해야합니다.",
  MINIMUM_TWO_CARS_REQUIRED:
    "[ERROR] 경주할 자동차는 2개 이상이여야 진행할 수 있습니다.",
  ATTEMPTS_MUST_BE_NUMERIC: "[ERROR] 시도 횟수는 숫자로 작성해야합니다.",
};
