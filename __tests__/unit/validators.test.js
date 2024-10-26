import ERROR_MESSAGES from '../../src/constants/errorMessages.js';
import { MAX_ROUNDS } from '../../src/constants/numbers.js';
import {
  checkCarNames,
  validateRoundCount,
} from '../../src/validators/validator.js';

describe('자동차 이름 유효성 검사', () => {
  test('자동차 이름이 5자 이하일 경우 통과한다.', () => {
    const carNames = ['Benz', 'BMW'];
    expect(() => checkCarNames(carNames)).not.toThrow();
  });

  test('자동차 이름이 5자를 초과하면 에러가 발생한다.', () => {
    const carNames = ['Volvo', 'Lamborghini'];
    expect(() => checkCarNames(carNames)).toThrow(
      ERROR_MESSAGES.NAME_LENGTH_EXCEEDED,
    );
  });

  test('자동차 이름이 비어있는 경우 에러가 발생한다.', () => {
    const carNames = ['Benz', ''];
    expect(() => checkCarNames(carNames)).toThrow(ERROR_MESSAGES.NAME_EMPTY);
  });

  test('자동차 이름에 숫자나 특수 문자가 포함된 경우 에러가 발생한다.', () => {
    const carNames = ['!1234', 'BMW'];
    expect(() => checkCarNames(carNames)).toThrow(
      ERROR_MESSAGES.NAME_INVALID_CHARACTERS,
    );
  });

  test('자동차 이름이 중복된 경우 에러가 발생한다.', () => {
    const carNames = ['Benz', 'Benz'];
    expect(() => checkCarNames(carNames)).toThrow(
      ERROR_MESSAGES.NAME_DUPLICATE,
    );
  });

  test('자동차가 2대 미만인 경우 에러가 발생한다.', () => {
    const carNames = ['Benz'];
    expect(() => checkCarNames(carNames)).toThrow(ERROR_MESSAGES.MINIMUM_CARS);
  });
});

describe('게임 시도 횟수 유효성 검사', () => {
  test('양의 정수 입력 시 통과한다.', () => {
    expect(() => validateRoundCount('5')).not.toThrow();
  });

  test('음수 입력 시 에러가 발생한다.', () => {
    expect(() => validateRoundCount('-1')).toThrow(
      ERROR_MESSAGES.POSITIVE_INTEGER_REQUIRED,
    );
  });

  test('0 입력 시 에러가 발생한다.', () => {
    expect(() => validateRoundCount('0')).toThrow(
      ERROR_MESSAGES.POSITIVE_INTEGER_REQUIRED,
    );
  });

  test('소수 입력 시 에러가 발생한다.', () => {
    expect(() => validateRoundCount('3.5')).toThrow(
      ERROR_MESSAGES.POSITIVE_INTEGER_REQUIRED,
    );
  });

  test('숫자가 아닌 입력이 들어오면 에러가 발생한다.', () => {
    expect(() => validateRoundCount('abc')).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER_INPUT,
    );
  });

  test('최대 시도 횟수를 초과하면 에러가 발생한다.', () => {
    const maxRounds = MAX_ROUNDS;
    expect(() => validateRoundCount(`${maxRounds + 1}`)).toThrow(
      ERROR_MESSAGES.ROUND_LIMIT_EXCEEDED(maxRounds),
    );
  });
});
