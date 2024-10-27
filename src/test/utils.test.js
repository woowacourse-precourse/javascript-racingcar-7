import {
  isIntegerNumericString,
  isLengthLessThan,
  isNotEmptyString,
  isNumericString,
  isPositiveNumericString,
} from '../lib/utils.js';

describe('utils', () => {
  describe('isNotEmptyString', () => {
    it('빈 문자열이 아닌 경우 true를 반환해야한다', () => {
      const value = 'woowacourse';

      const result = isNotEmptyString(value);

      expect(result).toBe(true);
    });

    it('빈 문자열인 경우 false를 반환해야한다', () => {
      const value = '';

      const result = isNotEmptyString(value);

      expect(result).toBe(false);
    });
  });

  describe('isLengthLessThan', () => {
    it('주어진 value의 길이가 length 이하인 경우 true를 반환해야한다', () => {
      const [value, length] = ['123', 3];

      const result = isLengthLessThan(value, length);

      expect(result).toBe(true);
    });

    it('주어진 value의 길이가 length 초과인 경우 false를 반환해야한다', () => {
      const [value, length] = ['1234', 3];

      const result = isLengthLessThan(value, length);

      expect(result).toBe(false);
    });
  });

  describe('isNumericString', () => {
    it('문자열을 숫자로 변환 가능한 경우 true를 반환해야한다', () => {
      const value = '123';

      const result = isNumericString(value);

      expect(result).toBe(true);
    });

    it('문자열을 숫자로 변환 불가한 경우 false를 반환해야한다', () => {
      const value = 'woowacourse';

      const result = isNumericString(value);

      expect(result).toBe(false);
    });
  });

  describe('isPositiveNumericString', () => {
    it('주어진 문자열이 양수인 경우 true를 반환해야한다.', () => {
      const value = '123';

      const result = isPositiveNumericString(value);

      expect(result).toBe(true);
    });

    it('주어진 문자열이 양수가 아닌 경우 false를 반환해야한다.', () => {
      const value = 'woowacourse';

      const result = isPositiveNumericString(value);

      expect(result).toBe(false);
    });
  });

  describe('isIntegerNumericString', () => {
    it('주어진 문자열이 정수인 경우 true를 반환해야한다', () => {
      const value = '123';

      const result = isIntegerNumericString(value);

      expect(result).toBe(true);
    });

    it('주어진 문자열이 정수가 아닌 경우 false를 반환해야한다', () => {
      const value = '123.123';

      const result = isIntegerNumericString(value);

      expect(result).toBe(false);
    });
  });
});
