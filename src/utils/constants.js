export const ERROR_PREFIX = "[ERROR] ";
export const FORWARD_THRESHOLD = 4;
export const MAX_NAME_LENGTH = 5;
export const MOVE_MARKER = "-";

export const INPUT_MESSAGES = {
  REQUEST_CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  REQUEST_ATTEMPT_COUNT: "시도할 횟수는 몇 회인가요?\n",
};

export const OUTPUT_MESSAGES = {
  GAME_START: "\n실행 결과",
  WINNERS_PREFIX: "최종 우승자 : ",
};

export const ERROR_MESSAGES = {
  INVALID_NAME_LENGTH: `${ERROR_PREFIX}자동차 이름은 1~5자여야 합니다.`,
  EMPTY_NAMES: `${ERROR_PREFIX}자동차 이름을 입력해야 합니다.`,
  DUPLICATE_NAMES: `${ERROR_PREFIX}자동차 이름은 중복될 수 없습니다.`,
  INVALID_ATTEMPTS: `${ERROR_PREFIX}시도 횟수는 양의 정수여야 합니다.`,
  EMPTY_INPUT: `${ERROR_PREFIX}입력값이 없습니다.`,
};