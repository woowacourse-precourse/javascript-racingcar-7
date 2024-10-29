import { CAR_NAME_ERROR_MESSAGE } from '../constants/messages.js';
import { validateCarName } from './validateCarName.js';

describe('자동차 이름 입력 유효성 검사', () => {
  describe('입력 값 검증', () => {
    test('유효한 자동차 이름 입력시 에러를 던지지 않는다.', () => {
      expect(() => validateCarName('car1,car2')).not.toThrow();
    });

    test.each([
      ['', CAR_NAME_ERROR_MESSAGE.NO_INPUT],
      [',', CAR_NAME_ERROR_MESSAGE.NO_INPUT],
      ['car1', CAR_NAME_ERROR_MESSAGE.ONE_CAR_NAME],
      ['car1,', CAR_NAME_ERROR_MESSAGE.NO_INPUT],
      [',car1', CAR_NAME_ERROR_MESSAGE.NO_INPUT],
    ])('입력값 %s에 대해 에러를 던진다', (input, errorMessage) => {
      expect(() => validateCarName(input)).toThrow(errorMessage);
    });
  });

  describe('자동차 입력 길이 검증', () => {
    test('5자 이하로 입력할 경우 에러를 던지지 않는다', () => {
      expect(() => validateCarName('abcd,abcde')).not.toThrow();
    });
    test.each([
      ['123456', CAR_NAME_ERROR_MESSAGE.OUT_OF_RANGE],
      ['12345,123456', CAR_NAME_ERROR_MESSAGE.OUT_OF_RANGE],
    ])('5자를 초과하는 이름 %s에 대해 에러를 던진다', (input, errorMessage) => {
      expect(() => validateCarName(input)).toThrow(errorMessage);
    });
  });

  describe('자동차 이름 공백 검증', () => {
    test.each([
      ['car 1,car2', CAR_NAME_ERROR_MESSAGE.INCLUDE_SPACE],
      [' car1,car2', CAR_NAME_ERROR_MESSAGE.INCLUDE_SPACE],
      ['car1, car2', CAR_NAME_ERROR_MESSAGE.INCLUDE_SPACE],
      ['car1,car2 ', CAR_NAME_ERROR_MESSAGE.INCLUDE_SPACE],
      ['car1,car 2', CAR_NAME_ERROR_MESSAGE.INCLUDE_SPACE],
    ])('공백을 포함한 이름 %s에 대해 에러를 던진다', (input, errorMessage) => {
      expect(() => validateCarName(input)).toThrow(errorMessage);
    });
  });

  describe('자동차 이름 중복 검증', () => {
    test('자동차 이름이 중복되었을 경우 에러를 던진다', () => {
      expect(() => validateCarName('car1,car2,car1')).toThrow(
        CAR_NAME_ERROR_MESSAGE.DUPLICATE_CAR_NAME
      );
    });
  });
});
