export const INPUT_MESSAGE = Object.freeze({
  CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  GAME_START: "\n실행 결과",
  WINNER: (winners) => `최종 우승자 : ${winners.join(", ")}`,
});

const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGE = Object.freeze({
  CAR_NAME_LENGTH: `${ERROR_PREFIX} 자동차 이름은 5자를 초과할 수 없습니다.`,
  CAR_NAME_IS_EMPTY: `${ERROR_PREFIX} 자동차 이름은 공백일 수 없습니다.`,
  DUPLICATE_NAME: `${ERROR_PREFIX} 중복된 이름이 있습니다.`,
  TRY_COUNT_NUMBER_POSITIVE: `${ERROR_PREFIX} 시도 횟수는 1이상이어야 합니다.`,
  TRY_COUNT_IS_NUMBER: `${ERROR_PREFIX} 시도 횟수는 숫자여야 합니다.`,
});

export const CONSTANTS = Object.freeze({
  RANDOM_MIN_NUMBER: 0,
  RANDOM_MAX_NUMBER: 9,
  MOVE_CONDITION: 4,
  NAME_SEPARATOR: ",",
  MOVE_FORWARD_MARKER: "-",
  MOVE_FORWARD_COUNT: 1,
});
