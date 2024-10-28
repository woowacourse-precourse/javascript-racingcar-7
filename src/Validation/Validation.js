import { ERROR_MESSAGES, throwError } from '../Model/Error.js';
import checkDuplicate from '../Util/checkDuplicate.js';
import { consecutiveDelimiterPattern, isNumber } from '../Util/Regex.js';
import Car from '../Model/Car.js';

/**
 * 자동차 이름 입력값을 검증하고, 이름을 콤마로 분리합니다.
 * 입력값이 문자열인지 확인하고, 연속 구분자, 빈 이름, 중복 이름이 없으며
 * 각 이름이 5자를 초과하지 않도록 유효성을 검사합니다.
 * @param {string} carNames - 콤마로 구분된 자동차 이름 문자열.
 * @returns {string[]} - 유효성이 검증된 자동차 이름 배열.
 * @throws 유효하지 않은 자동차 이름이 입력되었을 때 오류를 발생시킵니다.
 */
function validateCarNames(carNames) {
  if (typeof carNames !== 'string') {
    throwError(ERROR_MESSAGES.names.INVALID_INPUT);
  }

  if (consecutiveDelimiterPattern.test(carNames)) {
    throwError(ERROR_MESSAGES.names.CONSECUTIVE_DELIMITERS);
  }

  const carNamesSplit = carNames.split(',').map((name) => name.trim());

  if (carNamesSplit.some((name) => name === '')) {
    throwError(ERROR_MESSAGES.names.EMPTY_NAME);
  }

  if (carNamesSplit.some((name) => Array.from(name).length > 5)) {
    throwError(ERROR_MESSAGES.names.NAME_TOO_LONG);
  }

  if (checkDuplicate(carNamesSplit)) {
    throwError(ERROR_MESSAGES.names.DUPLICATED_NAMES);
  }

  return carNamesSplit;
}

/**
 * 라운드 입력값을 검증하여 양의 정수인지 확인합니다.
 * @param {string} input - 문자열로 표현된 라운드 입력값.
 * @returns {BigInt} - 유효성이 검증된 라운드 값 (BigInt).
 * @throws 입력값이 정수가 아니거나, 양수가 아닐 때 오류를 발생시킵니다.
 */
function validateRounds(input) {
  if (!isNumber.test(input)) {
    throwError(ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED);
  }

  const rounds = BigInt(input);
  // 유효성 검사
  if (rounds <= 0n) {
    throwError(ERROR_MESSAGES.rounds.ONLY_POSITIVE_ALLOWED);
  }

  return rounds;
}

/**
 * 주어진 자동차 객체가 Car의 유효한 인스턴스인지 확인합니다.
 * @param {Car} car - 유효성을 검사할 Car 인스턴스.
 * @throws car가 null이거나 undefined이거나 Car의 인스턴스가 아닐 경우 오류를 발생시킵니다.
 */
function isCarLegit(car) {
  if (car === null || car === undefined || !(car instanceof Car)) {
    throwError(ERROR_MESSAGES.cars.ILLEGAL_CAR);
  }
}

/**
 * 자동차 객체 배열을 검증하여 각 자동차가 Car의 유효한 인스턴스인지 확인합니다.
 * @param {Car[]} cars - 유효성을 검사할 Car 인스턴스 배열.
 * @returns {Car[]} - 유효성이 검증된 Car 인스턴스 배열.
 * @throws cars 배열의 길이가 잘못되었거나 유효하지 않은 자동차 객체가 포함되어 있을 경우 오류를 발생시킵니다.
 */
function validateCars(cars) {
  if (cars.length < 0) {
    throwError(ERROR_MESSAGES.cars.ILLEGAL_CAR_ARRAY);
  }
  cars.forEach((car) => {
    isCarLegit(car);
  });

  return cars;
}

export { validateCarNames, validateRounds, validateCars };
