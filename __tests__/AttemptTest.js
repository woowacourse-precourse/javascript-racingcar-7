import validateAttempt from '../src/validators/AttemptValidator.js';
import { ERROR_MESSAGE } from '../src/constants/Message.js';

describe('시도할 횟수 테스트 - [Error] 발생 상황', () => {
  test('시도할 횟수가 공백일 경우 에러가 발생합니다.', () => {
    const roundAttempt = '';
    expect(() => validateAttempt(roundAttempt)).toThrow(
      ERROR_MESSAGE.EMPTY_ATTEMPT,
    );
  });

  test('시도할 횟수가 숫자가 아닐 경우 에러가 발생합니다.', () => {
    const roundAttempt = NaN;
    expect(() => validateAttempt(roundAttempt)).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER,
    );
  });

  test('시도할 횟수가 1보다 작은 경우 에러가 발생합니다.', () => {
    const roundAttempt = 0;
    expect(() => validateAttempt(roundAttempt)).toThrow(
      ERROR_MESSAGE.LESS_THAN_ONE,
    );
  });

  test('시도할 횟수에 실수를 입력하면 에러가 발생합니다.', () => {
    const roundAttempt = 2.2;
    expect(() => validateAttempt(roundAttempt)).toThrow(
      ERROR_MESSAGE.NOT_AN_INTEGER,
    );
  });
});

describe('시도할 횟수 테스트 - 정상 작동', () => {
  test('조건에 맞는 경우 에러를 발생하지 않습니다.', () => {
    const roundAttempt = 5;
    expect(() => validateAttempt(roundAttempt)).not.toThrow();
  });
});
