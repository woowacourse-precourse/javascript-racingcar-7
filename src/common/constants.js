const LOG_MESSAGE = Object.freeze({
  START_MESSAGE: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분",
  ATTEMPT_COUNT_MESSAGE: "시도할 횟수는 몇 회인가요?",
})

const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT: "자동차 이름은 최대 5글자까지 가능합니다. 다시 입력해 주세요.",
  EMPTY_INPUT: "입력값이 비어 있습니다. 값을 입력해 주세요!",
  DUPLICATE_INPUT: "중복된 자동차 이름이 있습니다. 서로 다른 이름으로 입력해 주세요!",
  INVALID_ATTEMPTS_COUNT: "시도 횟수는 1 이상의 정수여야 합니다. 다시 입력해 주세요!",
});

const TAG = Object.freeze({
  ERROR_TAG: "[ERROR]",
});

const GAME_RULES = Object.freeze({
  MOVE_THRESHOLD: 4,
  DISTANCE_SYMBOL: '-',
  DELIMITER: ',',
});

export {
  ERROR_MESSAGE, 
  LOG_MESSAGE,
  TAG,
  GAME_RULES,
};