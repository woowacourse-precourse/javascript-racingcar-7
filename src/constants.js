const LOG_MESSAGE = Object.freeze({
  START_MESSAGE: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분",
  ATTEMPT_COUNT_MESSAGE: "시도할 횟수는 몇 회인가요?",
})

const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT: "자동차의 이름은 5글자 이하여야 합니다.",
  EMPTY_INPUT: "빈 값이 입력되었습니다. 입력값을 넣어주세요!",
  DUPLICATE_INPUT: "자동차 이름이 중복되었습니다. 서로 다른 이름으로 지어주세요!",
  INVALID_ATTEMPTS_COUNT: "올바르지 못한 시도 횟수를 입력하셨습니다. 시도 횟수에는 1 이상의 양의 정수값만 입력해 주세요!",
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