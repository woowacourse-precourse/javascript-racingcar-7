import { ERROR } from '../src/constant';
import {
  checkEmptyString,
  checkMinCarNumber,
  checkMaxCarNumber,
  checkMinTryNumber,
  checkMaxTryNumber,
  checkCarNameLength,
  checkIntegerTryNumber,
  checkConflictingCarName,
} from '../src/util/validationUtil';

describe('validateUtil 함수 테스트', () => {
  test.each([
    [{ input: '', error: ERROR.EMPTY_STRING }],
    [{ input: '  ', error: ERROR.EMPTY_STRING }],
  ])('빈 문자열 입력시 예외 처리', ({ input, error }) => {
    expect(() => checkEmptyString(input)).toThrow(error);
  });

  test.each([
    [{ input: ['pobi'], error: ERROR.MIN_CAR_NUMBER }],
    [{ input: [''], error: ERROR.MIN_CAR_NUMBER }],
  ])('자동차 이름을 1개 이하로 입력시 예외 처리 ', ({ input, error }) => {
    expect(() => checkMinCarNumber(input)).toThrow(error);
  });

  test('자동차 이름 1001개 이상 입력시 예외 처리', () => {
    const input = Array(1001).fill('carName');

    expect(() => checkMaxCarNumber(input)).toThrow(ERROR.MAX_CAR_NUMBER);
  });

  test('지동차 이름이 6글자 이상인 경우 예외 처리', () => {
    const cars = ['pobipobi', 'yeongi'];

    expect(() => checkCarNameLength(cars)).toThrow(ERROR.CAR_NAME_LENGTH);
  });

  test('자동차 이름이 중복되는 경우 예외 처리', () => {
    const cars = ['pobi', 'pobi', 'yeon'];

    expect(() => checkConflictingCarName(cars)).toThrow(
      ERROR.CONFLICTING_CAR_NAME,
    );
  });

  test.each([
    { input: -1, error: ERROR.MIN_TRY_NUMBER },
    { input: 0, error: ERROR.MIN_TRY_NUMBER },
    { input: -5, error: ERROR.MIN_TRY_NUMBER },
  ])('시도 횟수 1 이하인 경우 예외 처리', ({ input, error }) => {
    expect(() => checkMinTryNumber(input)).toThrow(error);
  });

  test(`시도 횟수 10001번 이상인 경우 예외 처리`, () => {
    const failInput = 10001;
    const trueInput = 10000;

    expect(() => checkMaxTryNumber(trueInput)).not.toThrow();
    expect(() => checkMaxTryNumber(failInput)).toThrow(ERROR.MAX_TRY_NUMBER);
  });

  test.each([
    { input: 2.55, error: ERROR.INTEGER_TRY_NUMBER },
    { input: 'ab', error: ERROR.INTEGER_TRY_NUMBER },
    { input: 1.5, error: ERROR.INTEGER_TRY_NUMBER },
  ])(
    '시도 횟수가 정수가 아닌 경우 예외 처리 (입력값: %s)',
    ({ input, error }) => {
      expect(() => checkIntegerTryNumber(input)).toThrow(error);
    },
  );
});
