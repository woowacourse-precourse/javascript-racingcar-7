import validateAttemptCount, { ERROR_MESSAGES } from './validate-attempt-count.js';

describe('validateAttemptCount', () => {
  test.each([
    ['abc', ERROR_MESSAGES.INVALID_INPUT],
    [0, ERROR_MESSAGES.MINUS_INPUT],
    [-5, ERROR_MESSAGES.MINUS_INPUT],
  ])('입력값 %s가 주어지면 "[ERROR] %s" 오류가 발생한다', (input, expectedMessage) => {
    expect(() => validateAttemptCount(parseInt(input, 10))).toThrow(`[ERROR] ${expectedMessage}`);
  });

  test('양의 정수 입력 시 오류를 발생시키지 않는다', () => {
    expect(() => validateAttemptCount(3)).not.toThrow();
  });
});
