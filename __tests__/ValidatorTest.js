import Validator from '../src/validators/Validator.js';
import { ERROR_MESSAGES } from '../src/constants/errorMessages.js';

describe('Validator 클래스 테스트', () => {
  // roundCount 검증
  test.each([
    [1, undefined], // 정상적인 경우
    [0, ERROR_MESSAGES.ZERO_OR_EMPTY], // 0일 때 예외 발생
    [-1, ERROR_MESSAGES.NEGATIVE_NUMBER], // 음수일 때 예외 발생
    [1.5, ERROR_MESSAGES.UNSAFE_INTEGER], // 실수일 때 예외 발생
    [NaN, ERROR_MESSAGES.NOT_A_NUMBER], // 숫자가 아닐 때 예외 발생
  ])('checkRoundCount(%p) 테스트', (input, expectedError) => {
    if (expectedError) {
      expect(() => Validator.checkRoundCount(input)).toThrow(expectedError);
    } else {
      expect(() => Validator.checkRoundCount(input)).not.toThrow();
    }
  });
});
