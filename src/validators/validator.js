import ERROR_MESSAGES from '../constants/errorMessages.js';
import { MAX_CAR_NAME_LENGTH, MAX_ROUNDS } from '../constants/numbers.js';
import throwError from '../utils/error.js';

/**
 * 쉼표로 구분된 이름 형식을 검사한다.
 *
 * @function checkCommaSeparatedNames
 * @param {string} input - 검사할 문자열
 * @throws {Error} 유효하지 않은 형식일 경우 에러를 던진다.
 */
export function checkCommaSeparatedNames(input) {
  const pattern = /^[a-zA-Z0-9가-힣,\s]+$/;

  if (!pattern.test(input)) throwError(ERROR_MESSAGES.INVALID_FORMAT);
}

/**
 * 자동차 이름의 길이가 제한을 초과하는지 검사한다.
 *
 * @function checkCarNameLength
 * @param {string} name - 자동차 이름
 * @throws {Error} 이름의 길이가 제한을 초과할 경우 에러를 던진다.
 */
function checkCarNameLength(name) {
  if (name.length > MAX_CAR_NAME_LENGTH)
    throwError(ERROR_MESSAGES.NAME_LENGTH_EXCEEDED);
}

/**
 * 자동차 이름에 허용되지 않는 문자가 포함되었는지 검사한다.
 *
 * @function checkAllowedCharacters
 * @param {string} name - 자동차 이름
 * @throws {Error} 허용되지 않는 문자가 포함된 경우 에러를 던진다.
 */
function checkAllowedCharacters(name) {
  const pattern = /^[a-zA-Z가-힣\s]+$/;

  if (!pattern.test(name)) throwError(ERROR_MESSAGES.NAME_INVALID_CHARACTERS);
}

/**
 * 자동차 이름이 비어 있는지 검사한다.
 *
 * @function checkEmptyString
 * @param {string} name - 자동차 이름
 * @throws {Error} 이름이 비어 있을 경우 에러를 던진다.
 */
function checkEmptyString(name) {
  if (name === '') throwError(ERROR_MESSAGES.NAME_EMPTY);
}

/**
 * 자동차 이름이 중복되는지 검사한다.
 *
 * @function checkCarNameDuplicates
 * @param {string[]} names - 자동차 이름 배열
 * @throws {Error} 이름이 중복될 경우 에러를 던진다.
 */
function checkCarNameDuplicates(names) {
  if (new Set(names).size === names.length) return;
  throwError(ERROR_MESSAGES.NAME_DUPLICATE);
}

/**
 * 자동차의 최소 개수를 검사한다.
 *
 * @function checkMinimumCars
 * @param {string[]} names - 자동차 이름 배열
 * @throws {Error} 최소 자동차 개수 조건을 만족하지 않을 경우 에러를 던진다.
 */
function checkMinimumCars(names) {
  if (names.length < 2) throwError(ERROR_MESSAGES.MINIMUM_CARS);
}

/**
 * 자동차 이름의 유효성을 검사한다.
 *
 * @function validateCarName
 * @param {string} name - 자동차 이름
 */
function validateCarName(name) {
  checkCarNameLength(name);
  checkEmptyString(name);
  checkAllowedCharacters(name);
}

/**
 * 자동차 이름 배열의 유효성을 검사한다.
 *
 * @function checkCarNames
 * @param {string[]} carNames - 자동차 이름 배열
 * @throws {Error} 유효하지 않은 이름이 포함된 경우 에러를 던진다.
 */
export function checkCarNames(carNames) {
  checkMinimumCars(carNames);
  checkCarNameDuplicates(carNames);

  carNames.forEach(validateCarName);
}

/**
 * 정수가 아닌 값 또는 양수가 아닌 값을 검사한다.
 *
 * @function checkPositiveInteger
 * @param {number} roundCount - 검사할 숫자
 * @throws {Error} 양의 정수가 아닐 경우 에러를 던진다.
 */
function checkPositiveInteger(roundCount) {
  if (!Number.isInteger(roundCount) || roundCount < 1)
    throwError(ERROR_MESSAGES.POSITIVE_INTEGER_REQUIRED);
}

/**
 * 시도 횟수가 최대 제한을 초과하는지 검사한다.
 *
 * @function checkRoundLimit
 * @param {number} roundCount - 시도 횟수
 * @param {number} maxRounds - 최대 시도 횟수
 * @throws {Error} 시도 횟수가 제한을 초과할 경우 에러를 던진다.
 */
function checkRoundLimit(roundCount, maxRounds) {
  if (roundCount > maxRounds)
    throwError(ERROR_MESSAGES.ROUND_LIMIT_EXCEEDED(maxRounds));
}

/**
 * 숫자가 아닌 값이 입력되었는지 검사한다.
 *
 * @function checkIsNumber
 * @param {number} roundCount - 검사할 값
 * @throws {Error} 숫자가 아닌 값일 경우 에러를 던진다.
 */
function checkIsNumber(roundCount) {
  if (Number.isNaN(roundCount)) throwError(ERROR_MESSAGES.INVALID_NUMBER_INPUT);
}

/**
 * 시도 횟수의 유효성을 검사한다.
 *
 * @function validateRoundCount
 * @param {string} roundCountInput - 사용자가 입력한 시도 횟수 문자열
 * @returns {number} 유효한 시도 횟수
 * @throws {Error} 유효하지 않은 값이 입력된 경우 에러를 던진다.
 */
export function validateRoundCount(roundCountInput) {
  const roundCount = Number(roundCountInput);

  checkIsNumber(roundCount);
  checkPositiveInteger(roundCount);
  checkRoundLimit(roundCount, MAX_ROUNDS);

  return roundCount;
}
