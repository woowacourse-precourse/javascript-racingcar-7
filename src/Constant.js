const MESSAGE_INPUT = Object.freeze({
  CAR_NAME_INPUT:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  MOVE_CNT_INPUT: "시도할 횟수는 몇 회인가요?\n",
});

const MESSAGE_OUTPUT = (winner) =>
  Object.freeze({
    WINNER_CAR: `최종 우승자 : ${winner.join(", ")}`,
  });

const ERROR_MESSAGE = Object.freeze({
  CAR_NAME_5_LESS: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
  CAR_NAME_1_MORE: "[ERROR] 자동차 이름을 1자 이상 입력해주세요.",
  ATTEMPT_CNT_NUMBER: "[ERROR] 시도 횟수를 숫자로 입력해주세요.",
  ATTEMPT_CNT_POSITIVE: "[ERROR] 시도 횟수를 양수로 입력해주세요.",
});

export { MESSAGE_INPUT, MESSAGE_OUTPUT, ERROR_MESSAGE };
