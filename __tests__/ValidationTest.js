import ValidationError from '../src/error/ValidationError';
import {
  isValidDelimiter,
  isValidCarNameLength,
  isCarNameDuplicated,
  isValidTryCount,
} from '../src/util/validation';
import { CONSOLE_OPTIONS } from '../src/constant/option';

describe('자동차 이름 유효성 검사 함수', () => {
  describe('isValidDelimiter 검증', () => {
    test('유효한 입력이 여러 이름을 포함하는 경우', () => {
      expect(() => isValidDelimiter('pobi,woni,jun')).not.toThrow();
    });

    test('입력에 이름이 하나만 있는 경우 에러를 발생시킴', () => {
      expect(() => isValidDelimiter('pobi')).toThrow(ValidationError);
    });

    test('입력이 비어있는 경우 에러를 발생시킴', () => {
      expect(() => isValidDelimiter('')).toThrow(ValidationError);
    });
  });

  describe('isValidCarNameLength 검증', () => {
    test('이름들이 최대 길이 이내인 유효한 입력', () => {
      expect(() => isValidCarNameLength('pobi,woni,jun')).not.toThrow();
    });

    test('어떤 이름이라도 최대 길이를 초과할 경우 에러를 발생시킴', () => {
      const longName = 'a'.repeat(CONSOLE_OPTIONS.CAR_NAME_MAX_LENGTH + 1);
      expect(() => isValidCarNameLength(`pobi,${longName},jun`)).toThrow(
        ValidationError
      );
    });

    test('어떤 이름이 공백으로만 이루어진 경우 에러를 발생시킴', () => {
      expect(() => isValidCarNameLength('pobi,,jun')).toThrow(ValidationError);
    });
  });

  describe('isCarNameDuplicated 검증', () => {
    test('이름들이 고유한 경우 유효한 입력', () => {
      expect(() => isCarNameDuplicated('pobi,woni,jun')).not.toThrow();
    });

    test('중복된 이름이 존재할 경우 에러를 발생시킴', () => {
      expect(() => isCarNameDuplicated('pobi,woni,pobi')).toThrow(
        ValidationError
      );
    });
  });
});

describe('시도 횟수 유효성 검사 함수', () => {
  describe('isValidTryCount 검증', () => {
    test('양의 정수 입력일 경우 예외가 발생하지 않음', () => {
      expect(() => isValidTryCount('3')).not.toThrow();
    });

    test('0 이하의 값이 입력될 경우 에러 발생', () => {
      expect(() => isValidTryCount('-1')).toThrow(ValidationError);
      expect(() => isValidTryCount('0')).toThrow(ValidationError);
    });

    test('숫자가 아닌 값이 입력될 경우 에러 발생', () => {
      expect(() => isValidTryCount('abc')).toThrow(ValidationError);
      expect(() => isValidTryCount('')).toThrow(ValidationError);
      expect(() => isValidTryCount(null)).toThrow(ValidationError);
      expect(() => isValidTryCount(undefined)).toThrow(ValidationError);
    });
  });
});
