const ERROR_PREFIX = '[ERROR]';

const ERROR_MESSAGES = Object.freeze({
  NAME_TOO_LONG: '자동차 이름은 5자를 초과할 수 없습니다.',
  INVALID_INPUT_ROUND: '시도 횟수는 1 이상이어야 합니다.',
  DUPLICATED_NAMES: '중복된 이름은 사용할수 없습니다.',
});

function throwError(message) {
  throw new Error(ERROR_PREFIX + message);
}

export { throwError, ERROR_MESSAGES };
