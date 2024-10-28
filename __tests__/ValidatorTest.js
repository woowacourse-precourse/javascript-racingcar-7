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

  // names 검증
  test.each([
    [['pobi', 'crong'], undefined], // 정상적인 경우
    [['pobi', 'pobi'], ERROR_MESSAGES.SAME_NAMES], // 중복된 이름 예외 발생
    [['pobi', 'crong', ''], ERROR_MESSAGES.NAME_NOT_ALPHABET], // 공백 이름 예외 발생
    [['abcdef'], ERROR_MESSAGES.NAME_TOO_LONG], // 이름 길이 초과 예외 발생
    [['pobi', '크롱'], ERROR_MESSAGES.NAME_NOT_ALPHABET], // 한글 포함 예외 발생
    [['pobi'], ERROR_MESSAGES.SINGLE_PLAYER], // 한 명일 때 예외 발생
  ])('checkNames(%p) 테스트', (names, expectedError) => {
    if (expectedError) {
      expect(() => Validator.checkNames(names)).toThrow(expectedError);
    } else {
      expect(() => Validator.checkNames(names)).not.toThrow();
    }
  });
});
