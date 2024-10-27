import { validateCarNames, validateAttempts } from '../../src/utils/validator';
import { ERROR_MESSAGES } from '../../src/utils/constants.js';

describe('입력값 검증', () => {
  describe('자동차 이름 검증', () => {
    test('빈 배열 입력 시 에러 발생', () => {
      expect(() => validateCarNames([])).toThrow(ERROR_MESSAGES.EMPTY_NAMES);
    });

    test('중복된 이름 입력 시 에러 발생', () => {
      expect(() => validateCarNames(['pobi', 'pobi'])).toThrow(ERROR_MESSAGES.DUPLICATE_NAMES);
    });
  });

  describe('시도 횟수 검증', () => {
    test.each([
      ['0', '0은 입력할 수 없습니다'],
      ['-1', '음수는 입력할 수 없습니다'],
      ['1.5', '정수가 아닙니다'],
      ['abc', '숫자가 아닙니다']
    ])('잘못된 입력 %s에 대한 에러 발생: %s', (input) => {
      expect(() => validateAttempts(input)).toThrow(ERROR_MESSAGES.INVALID_ATTEMPTS);
    });
  });
});