export const NUMBER = {
  RANDOM_MIN: 0,
  RANDOM_MAX: 9,
  CAN_PROGRESS: 4,
  CAR_NAME_MAX: 5,
  CAR_NAME_MIN: 1,
  ATTEMPT_MIN: 1,
};

export const MESSAGE = {
  CAR_NAME_INPUT:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  ATTEMPT_COUNT_INPUT: "시도할 횟수는 몇 회인가요?",
  ATTEMPT_RESULT: "실행 결과",
  LINE_BREAK: "\n",
  WINNER: "최종 우승자 : ",
};

export const ERROR_MESSAGE = {
  TAG: "[ERROR]",
  CAR_NAME_TOO_LONG: `자동차 이름은 ${NUMBER.CAR_NAME_MAX} 글자를 초과할 수 없습니다.`,
  CAR_NAME_TOO_SHORT: `자동차 이름은 ${NUMBER.CAR_NAME_MIN} 글자 이상 입력해주세요.`,
  CAR_NAME_SAME: "자동차 이름이 중복되었습니다.",
  NOT_NUMBER: "정수를 입력해주세요.",
  ATTEMPT_MIN: `최소 ${NUMBER.ATTEMPT_MIN}번 시도해야 합니다.`,
};

export const DELIMITER = {
  CAR: ",",
  WINNER: ",",
};
