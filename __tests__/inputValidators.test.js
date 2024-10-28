import {
  DELIMITER_VALIDATOR,
  CAR_NAME_VALIDATOR,
  ATTEMPT_TIMES_VALIDATOR,
} from '../src/inputValidators.js';
import ERROR_MESSAGE from '../src/constants.js';

describe('입력값 유효성 검증', () => {
  test('입력이 비어있는 경우', () => {
    expect(() => CAR_NAME_VALIDATOR('')).toThrow(
      ERROR_MESSAGE.INPUT_VALIDATION,
    );
  });

  test('쉼표로 구분되지 않는 경우', () => {
    expect(() => DELIMITER_VALIDATOR('pobi&jun')).toThrow(
      ERROR_MESSAGE.DELIMITER_VALIDATION,
    );
  });

  test('자동차 이름 길이가 5자를 넘을 경우', () => {
    expect(() => CAR_NAME_VALIDATOR(['pobi', 'junjun'])).toThrow(
      ERROR_MESSAGE.CAR_NAME_LENGTH_VALIDATION,
    );
  });

  test('동일한 자동차 이름이 존재하는 경우', () => {
    expect(() => CAR_NAME_VALIDATOR(['1.2.3', '1.2.3'])).toThrow(
      ERROR_MESSAGE.CAR_NAME_DUPLICATION,
    );
  });

  test('시도 횟수가 숫자가 아닐 경우', () => {
    expect(() => ATTEMPT_TIMES_VALIDATOR('3i')).toThrow(
      ERROR_MESSAGE.ATTEMPT_TIMES_TYPE_VALIDATION,
    );
  });

  test('시도 횟수가 1 미만일 경우', () => {
    expect(() => ATTEMPT_TIMES_VALIDATOR('-2')).toThrow(
      ERROR_MESSAGE.ATTEMPT_TIMES_VALIDATION,
    );
    expect(() => ATTEMPT_TIMES_VALIDATOR('0')).toThrow(
      ERROR_MESSAGE.ATTEMPT_TIMES_VALIDATION,
    );
  });
});
