const MESSAGES = {
  INFO: {
    START: "프로그램이 실행되었습니다.",
    CAR_NAME_INPUT:
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
    TRY_NUMBER_INPUT: "시도할 횟수는 몇 회인가요? 10000이하의 정수여야합니다.",
  },
  ERROR: {
    EMPTY_INPUT: "[ERROR] 입력값이 비었습니다.",
    NOT_INTEGER: "[ERROR] 정수만 입력해주세요.",
    MAX_TRY: "[ERROR] 시도할 횟수는 10000번 이하여야합니다.",
  },
  RESULT: {
    WINNER: "최종 우승자 : ",
  },
};

export default MESSAGES;
