// 메시지 관련 상수를 정의한 파일

export const INPUT_MESSAGES = {
  CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
};

export const OUTPUT_MESSAGES = {
  RUN_RESULT: "\n실행 결과",
  FINAL_WINNER_PREFIX: "최종 우승자 : ",
  ERROR_MESSAGE_PREFIX: "[ERROR]",
};

export const ERROR_MESSAGE = {
  CAR_NAME_LENGTH: "자동차 이름은 1자 이상 5자 이하만 가능합니다.",
  DUPLICATE_NAME: "자동차 이름은 중복될 수 없습니다.",
  TRY_COUNT: "시도 횟수는 1 이상의 숫자만 가능합니다.",
};
