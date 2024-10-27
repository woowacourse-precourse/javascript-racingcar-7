export const CONSTANTS = Object.freeze({
  NAME_SEPARATOR: ",",
  MAX_NAME_LENGTH: 5,
  RANDOM_MIN: 0,
  RANDOM_MAX: 9,
  MOVE_THRESHOLD: 4,
  POSITION_MARKER: "-",
});

export const INPUT_MESSAGES = Object.freeze({
  PLAYER_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRIALS: "시도할 횟수는 몇 회인가요?\n",
});

const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGES = Object.freeze({
  EMPTY_INPUT: `${ERROR_PREFIX} 값을 입력해주세요.`,
  NAME_LENGTH: (maxLength) => `${ERROR_PREFIX} 자동차 이름은 ${maxLength}자 이하로 입력해주세요.`,
  DUPLICATE_NAME: `${ERROR_PREFIX} 중복된 이름이 있습니다. 각 자동차의 이름은 고유해야 합니다.`,
  TRIALS_NUMBER: `${ERROR_PREFIX} 시도 횟수는 1 이상의 정수로 입력해주세요.`,
});

export const OUTPUT_MESSAGES = Object.freeze({
  RACE_RESULT: "\n실행 결과",
  FINAL_WINNER: (winners) => `최종 우승자 : ${winners.join(", ")}`,
});
