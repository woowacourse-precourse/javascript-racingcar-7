import {
  isCarNames,
  isUniqueCarNames,
  isPositiveNumber,
} from '../../src/utils/validators.js';

describe('validators', () => {
  describe('isCarNames', () => {
    it('빈 문자가 입력될 경우 false를 반환한다.', () => {
      expect(isCarNames('')).toBe(false);
    });

    it('차 이름이 1글자 이상 5글자 이하일 때 true를 반환한다.', () => {
      expect(isCarNames('car1,car2,car3', ',')).toBe(true);
      expect(isCarNames('a,b,c', ',')).toBe(true);
    });

    it('차 이름이 5글자를 초과할 때 false를 반환한다.', () => {
      expect(isCarNames('car1,carrrrrrrr', ',')).toBe(false);
    });

    it('차 이름이 빈 문자열일 경우 false를 반환한다.', () => {
      expect(isCarNames('car1,,car3', ',')).toBe(false);
    });

    it('중복된 차 이름이 있어도 차 이름의 길이만으로는 true를 반환한다.', () => {
      expect(isCarNames('car1,car1,car2', ',')).toBe(true);
    });
  });

  describe('isUniqueCarNames', () => {
    it('모든 차 이름이 유일할 때 true를 반환한다.', () => {
      expect(isUniqueCarNames('car1,car2,car3', ',')).toBe(true);
    });

    it('차 이름이 중복될 경우 false를 반환한다.', () => {
      expect(isUniqueCarNames('car1,car1,car2', ',')).toBe(false);
    });

    it('차 이름이 빈 문자열이어도 true를 반환한다.', () => {
      expect(isUniqueCarNames('', ',')).toBe(true);
    });
  });

  describe('isPositiveNumber', () => {
    it('양의 숫자일 경우 true를 반환한다.', () => {
      expect(isPositiveNumber('5')).toBe(true);
      expect(isPositiveNumber('0.1')).toBe(true);
    });

    it('0 이하의 숫자일 경우 false를 반환한다.', () => {
      expect(isPositiveNumber('0')).toBe(false);
      expect(isPositiveNumber('-1')).toBe(false);
    });

    it('숫자가 아닌 문자열일 경우 false를 반환한다.', () => {
      expect(isPositiveNumber('abc')).toBe(false);
      expect(isPositiveNumber('')).toBe(false);
    });
  });
});
