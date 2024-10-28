/**
 * 오류 메시지에 접두사로 붙는 문자열입니다.
 * 모든 오류 메시지는 이 접두사를 포함하여 출력됩니다.
 *
 * @constant {string} ERROR_PREFIX
 * @default '[ERROR] '
 */
const ERROR_PREFIX = '[ERROR] ';

/**
 * 시스템에서 발생할 수 있는 다양한 오류 메시지를 정의한 객체입니다.
 * `Object.freeze`로 동결되어 있어 수정할 수 없습니다.
 *
 * @constant {Object} ERROR_MESSAGES
 * @property {Object} rounds - 시도 횟수 입력과 관련된 오류 메시지들입니다.
 * @property {string} rounds.INVALID_INPUT_ROUND - 시도 횟수가 1 이상이 아닐 때 발생하는 오류 메시지입니다.
 * @property {string} rounds.ONLY_INTEGER_ALLOWED - 시도 횟수는 정수여야 할 때 발생하는 오류 메시지입니다.
 * @property {string} rounds.ONLY_POSITIVE_ALLOWED - 시도 횟수가 양수가 아닐 때 발생하는 오류 메시지입니다.
 * @property {string} rounds.ONLY_NUMBER_ALLOWED - 시도 횟수가 숫자가 아닐 때 발생하는 오류 메시지입니다.
 *
 * @property {Object} names - 자동차 이름과 관련된 오류 메시지들입니다.
 * @property {string} names.INVALID_NAME - 이름이 올바르지 않을 때 발생하는 오류 메시지입니다.
 * @property {string} names.NAME_TOO_LONG - 이름이 5자를 초과할 때 발생하는 오류 메시지입니다.
 * @property {string} names.DUPLICATED_NAMES - 중복된 이름을 사용할 수 없을 때 발생하는 오류 메시지입니다.
 * @property {string} names.EMPTY_NAME - 공백을 이름으로 사용할 수 없을 때 발생하는 오류 메시지입니다.
 * @property {string} names.CONSECUTIVE_DELIMITERS - 구분자가 중복될 때 발생하는 오류 메시지입니다.
 * @property {string} names.WRONG_FORMAT - 포맷이 올바르지 않을 때 발생하는 오류 메시지입니다.
 *
 * @property {Object} cars - 자동차 객체와 관련된 오류 메시지들입니다.
 * @property {string} cars.ILLEGAL_CAR - 정의되지 않은 자동차 객체일 때 발생하는 오류 메시지입니다.
 * @property {string} cars.ILLEGAL_CAR_ARRAY - 자동차 배열이 올바르지 않을 때 발생하는 오류 메시지입니다.
 */
const ERROR_MESSAGES = Object.freeze({
  rounds: {
    INVALID_INPUT_ROUND: '시도 횟수는 1 이상이어야 합니다.',
    ONLY_INTEGER_ALLOWED: '시도 횟수는 무조건 정수여야합니다.',
    ONLY_POSITIVE_ALLOWED: '시도 횟수는 무조건 양수여야합니다.',
    ONLY_NUMBER_ALLOWED: '시도 횟수는 무조건 숫자여야합니다.',
  },
  names: {
    INVALID_NAME: '이름이 올바르지 않습니다',
    NAME_TOO_LONG: '자동차 이름은 5자를 초과할 수 없습니다.',
    DUPLICATED_NAMES: '중복된 이름은 사용할수 없습니다.',
    EMPTY_NAME: '공백을 이름으로 사용할수 없습니다',
    CONSECUTIVE_DELIMITERS: '구분자를 중복되서 사용할수 없습니다.',
    WRONG_FORMAT: '포멧팅이 올바르지 않습니다.',
  },
  cars: {
    ILLEGAL_CAR: '생성된 차량 객체가 정의되지 않았습니다.',
    ILLEGAL_CAR_ARRAY: '차량 배열이 올바르지 않습니다.',
  },
});

/**
 * 지정된 오류 메시지와 함께 오류를 던집니다.
 *
 * @function throwError
 * @param {string} message - 오류 메시지 내용입니다.
 * @throws {Error} 주어진 메시지와 `ERROR_PREFIX`가 포함된 오류를 던집니다.
 *
 * @example
 * throwError(ERROR_MESSAGES.rounds.INVALID_INPUT_ROUND);
 * // Error: [ERROR] 시도 횟수는 1 이상이어야 합니다.
 */
function throwError(message) {
  throw new Error(ERROR_PREFIX + message);
}

export { throwError, ERROR_MESSAGES, ERROR_PREFIX };
