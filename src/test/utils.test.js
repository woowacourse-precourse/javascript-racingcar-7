import { isLengthLessThan, isNotEmptyString } from '../lib/utils.js';

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
});
