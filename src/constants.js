const LOG_MESSAGE = Object.freeze({
  START_MESSAGE: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분",
})

const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT: "자동차의 이름은 5글자 이하여야 합니다.",
  EMPTY_INPUT: "빈 문자열이 입력되었습니다. 자동차의 이름을 입력해 주세요!",
  DUPLICATE_INPUT: "자동차 이름이 중복되었습니다. 서로 다른 이름으로 지어주세요!",
});

const TAG = Object.freeze({
  ERROR_TAG: "[ERROR]",
});

export {
  ERROR_MESSAGE, 
  LOG_MESSAGE,
  TAG,
};