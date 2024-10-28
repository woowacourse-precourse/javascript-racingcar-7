const LOG_MESSAGE = Object.freeze({
  START_MESSAGE:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRY_NUM_MESSAGE: "시도할 횟수는 몇 회인가요?\n",
  EXECUTION_RESULT: "\n실행 결과",
  FINAL_WINNER: "최종 우승자 : ",
});
const ERROR_MESSAGE = Object.freeze({
  INCORRECT_VALUE: "[ERROR] 공백은 입력할 수 없습니다.",
  LIMIT_COUNT_INCORRECT_VALUE: "[ERROR] 자동차 입력은 최대 5대까지 입니다.",
  DUPLICATE_VALUE: "[ERROR] 중복된 자동차가 포함되어 있습니다.",
  NAME_LIMIT: "[ERROR] 이름은 5자 이하만 가능합니다.",
  TRY_NUMBER_LIMIT: "[ERROR] 최대 시도 횟수는 10회입니다.",
  ONLY_INTGER: "[ERROR] 시도 횟수는 숫자만 입력 가능합니다.",
});

export { LOG_MESSAGE, ERROR_MESSAGE };
