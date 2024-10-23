export const ERROR_MESSAGE = Object.freeze({
  CAR_NAME_INPUT_ERROR: Object.freeze({
    RANGE_ERROR: "[ERROR] 각 자동차의 이름은 1 ~ 5자 이내로 입력해주세요.",
  }),

  TRY_INPUT_ERROR: Object.freeze({
    POSITIVE_ERROR: "[ERROR] 시도 횟수를 음수가 아닌 정수로 입력해주세요.",
  }),
});

export const INPUT_MESSAGE = Object.freeze({
  CAR_NAME_INPUT_MESSAGE:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  TRY_INPUT_MESSAGE: "시도할 횟수는 몇 회인가요?\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  RESULT_TITLE: "\n실행 결과",
  WINNER_NAMES: "최종 우승자:",
});

export const MOVEMENT_MINIMUM = 4;
export const MOVE_INCREMENT = 1;
export const CAR_NAME_MINIMUM = 1;
export const CAR_NAME_MAXIMUM = 5;
export const DEFAULT_CAR_DISTANCE = 0;
