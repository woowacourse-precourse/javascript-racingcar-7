import {
  errorString,
  isInputEmpty,
  isNumber,
  isPositiveNumber,
  isIntegerNumber,
} from '../src/util.js';
import { ERROR_MESSAGE } from '../src/constant.js';

describe('유틸 함수 테스트', () => {
  test('errorString 함수 테스트', () => {
    // given
    const message = ERROR_MESSAGE.EMPTY_INPUT;

    // when
    const result = errorString(message);

    // then
    expect(result).toBe(`[ERROR] ${message}`);
  });

  test('isInputEmpty 함수 테스트', () => {
    // given
    const emptyString = '';
    const spaceString = '   ';
    const nonEmptyString = 'hello';

    // then
    expect(isInputEmpty(emptyString)).toBe(true);
    expect(isInputEmpty(spaceString)).toBe(true);
    expect(isInputEmpty(nonEmptyString)).toBe(false);
  });

  test('isNumber 함수 태스트', () => {
    // given
    const validNumber = 10;
    const invalidNumber = NaN;

    // then
    expect(isNumber(validNumber)).toBe(true);
    expect(isNumber(invalidNumber)).toBe(false);
  });

  test('isPositiveNumber 함수 테스트', () => {
    // given
    const positiveNumber = 5;
    const negativeNumber = -3;
    const zero = 0;

    // then
    expect(isPositiveNumber(positiveNumber)).toBe(true);
    expect(isPositiveNumber(negativeNumber)).toBe(false);
    expect(isPositiveNumber(zero)).toBe(false);
  });

  test('isIntegerNumber 함수 테스트', () => {
    // given
    const integer = 4;
    const float = 4.5;

    // then
    expect(isIntegerNumber(integer)).toBe(true);
    expect(isIntegerNumber(float)).toBe(false);
  });
});
